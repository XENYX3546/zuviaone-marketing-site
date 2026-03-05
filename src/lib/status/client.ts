import type { StatusPageResponse } from './types';

const API_BASE_URL = 'https://app.zuviaone.com/api/status';

export const STATUS_REVALIDATE = 30;

export class StatusApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'StatusApiError';
  }
}

async function statusFetch<T>(
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
      revalidate: options.revalidate ?? STATUS_REVALIDATE,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    throw new StatusApiError(
      'STATUS_FETCH_ERROR',
      `Failed to fetch status: ${response.statusText}`,
      response.status
    );
  }

  return (await response.json()) as T;
}

export function getStatusPage(): Promise<StatusPageResponse> {
  return statusFetch<StatusPageResponse>('', {
    revalidate: STATUS_REVALIDATE,
    tags: ['status-page'],
  });
}
