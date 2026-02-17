import type { GetProfileResponse, ProfileErrorResponse } from './types';

// ============================================
// CONFIGURATION
// ============================================

const API_BASE_URL = 'https://app.zuviaone.com/api/public/pages';

export const PROFILE_CACHE_TAGS = {
  profile: (slug: string) => `profile-${slug}`,
} as const;

export const PROFILE_REVALIDATE = 60; // 1 minute ISR

// ============================================
// ERROR HANDLING
// ============================================

export class ProfileApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'ProfileApiError';
  }
}

function isErrorResponse(data: unknown): data is ProfileErrorResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'error' in data &&
    typeof (data as ProfileErrorResponse).error?.code === 'string'
  );
}

// ============================================
// BASE FETCH
// ============================================

async function profileFetch<T>(
  endpoint: string,
  options: {
    revalidate?: number;
    tags?: string[];
  } = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    next: {
      revalidate: options.revalidate ?? PROFILE_REVALIDATE,
      tags: options.tags,
    },
  });

  if (response.status === 404) {
    const data = await response.json();
    if (isErrorResponse(data)) {
      throw new ProfileApiError(data.error.code, data.error.message, 404);
    }
    throw new ProfileApiError(
      'BUSINESS_PROFILE_NOT_FOUND',
      'Profile not found',
      404
    );
  }

  const data = await response.json();

  if (!response.ok) {
    if (isErrorResponse(data)) {
      throw new ProfileApiError(
        data.error.code,
        data.error.message,
        response.status
      );
    }
    throw new ProfileApiError(
      'UNKNOWN_ERROR',
      'An unknown error occurred',
      response.status
    );
  }

  return data as T;
}

// ============================================
// PUBLIC API
// ============================================

export function getProfile(
  businessSlug: string
): Promise<GetProfileResponse> {
  return profileFetch<GetProfileResponse>(
    `/${encodeURIComponent(businessSlug)}/profile`,
    {
      revalidate: PROFILE_REVALIDATE,
      tags: [PROFILE_CACHE_TAGS.profile(businessSlug)],
    }
  );
}
