import { notFound } from 'next/navigation';
import { ProfilePage } from '@/features/profile';
import { siteConfig } from '@/lib/constants';
import {
  getProfile,
  ProfileApiError,
  buildThemeStyle,
  buildGoogleFontsUrl,
  getThemeClasses,
} from '@/lib/profiles';
import type { ProfileData } from '@/lib/profiles';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ businessSlug: string }>;
};

// ============================================
// METADATA
// ============================================

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { businessSlug } = await params;

  try {
    const response = await getProfile(businessSlug);
    const { business, seo } = response.data;

    return {
      title: seo.metaTitle ?? business.name,
      description: seo.metaDescription ?? undefined,
      keywords: seo.keywords.length > 0 ? seo.keywords.join(', ') : undefined,
      alternates: {
        canonical: `${siteConfig.url}/p/${businessSlug}`,
      },
      openGraph: {
        title: seo.metaTitle ?? business.name,
        description: seo.metaDescription ?? undefined,
        url: `${siteConfig.url}/p/${businessSlug}`,
        type: 'website',
        images: seo.ogImageUrl ? [{ url: seo.ogImageUrl }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.metaTitle ?? business.name,
        description: seo.metaDescription ?? undefined,
        images: seo.ogImageUrl ? [seo.ogImageUrl] : undefined,
      },
      robots: seo.noIndex
        ? { index: false, follow: false }
        : { index: true, follow: true },
    };
  } catch {
    return { title: 'Profile Not Found' };
  }
}

// ============================================
// JSON-LD STRUCTURED DATA
// ============================================

function LocalBusinessSchema({ data }: { data: ProfileData }) {
  const { business, sections } = data;

  const {address} = business;
  const hasAddress =
    address.line1 || address.city || address.state || address.postalCode;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: `${siteConfig.url}/p/${business.slug}`,
    ...(business.logoUrl && { logo: business.logoUrl }),
    ...(business.contactPhone && { telephone: business.contactPhone }),
    ...(business.contactEmail && { email: business.contactEmail }),
    ...(business.contactWebsite && { url: business.contactWebsite }),
    ...(hasAddress && {
      address: {
        '@type': 'PostalAddress',
        ...(address.line1 && {
          streetAddress: [address.line1, address.line2]
            .filter(Boolean)
            .join(', '),
        }),
        ...(address.city && { addressLocality: address.city }),
        ...(address.state && { addressRegion: address.state }),
        ...(address.postalCode && { postalCode: address.postalCode }),
        addressCountry: address.country,
      },
    }),
    ...(business.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
      },
    }),
  };

  // Add opening hours if available
  if (business.openingHours) {
    const dayMap: Record<string, string> = {
      monday: 'Mo',
      tuesday: 'Tu',
      wednesday: 'We',
      thursday: 'Th',
      friday: 'Fr',
      saturday: 'Sa',
      sunday: 'Su',
    };

    const hoursSpec: string[] = [];
    for (const [day, abbrev] of Object.entries(dayMap)) {
      const schedule =
        business.openingHours[day as keyof typeof business.openingHours];
      if (
        schedule &&
        typeof schedule === 'object' &&
        'isOpen' in schedule &&
        schedule.isOpen
      ) {
        for (const slot of schedule.slots) {
          hoursSpec.push(`${abbrev} ${slot.open}-${slot.close}`);
        }
      }
    }

    if (hoursSpec.length > 0) {
      schema.openingHours = hoursSpec;
    }
  }

  // Add aggregate rating from reviews section if available
  if (sections.reviews && sections.reviews.testimonials.length > 0) {
    const ratings = sections.reviews.testimonials
      .filter((t) => t.rating != null)
      .map((t) => t.rating!);
    if (ratings.length > 0) {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: avg.toFixed(1),
        reviewCount: ratings.length,
        bestRating: 5,
        worstRating: 1,
      };
    }
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function BusinessProfilePage({ params }: Props) {
  const { businessSlug } = await params;

  let profileData: ProfileData | null = null;

  try {
    const response = await getProfile(businessSlug);
    profileData = response.data;
  } catch (error) {
    if (
      error instanceof ProfileApiError &&
      error.code === 'BUSINESS_PROFILE_NOT_FOUND'
    ) {
      notFound();
    }
    console.error('Failed to fetch profile:', error);
    notFound();
  }

  if (!profileData) {
    notFound();
  }

  const { profile } = profileData;
  const themeStyle = buildThemeStyle(profile.brandingConfig);
  const fontsUrl = buildGoogleFontsUrl(profile.brandingConfig);
  const themeClasses = getThemeClasses(profile.theme);

  const bodyFont = profile.brandingConfig.fontFamily ?? 'Inter';
  const headingFont =
    profile.brandingConfig.headerFontFamily ?? bodyFont;

  return (
    <>
      {/* Dynamic Google Fonts */}
      {fontsUrl && (
        <>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href={fontsUrl} />
        </>
      )}

      {/* JSON-LD */}
      <LocalBusinessSchema data={profileData} />

      {/* Profile wrapper with theme CSS custom properties */}
      <div
        style={
          {
            ...themeStyle,
            '--profile-bg': profile.brandingConfig.secondaryColor ?? '#ffffff',
            fontFamily: `'${bodyFont}', sans-serif`,
            '--profile-heading-font': `'${headingFont}', sans-serif`,
          } as React.CSSProperties
        }
        className={themeClasses.pageBackground}
      >
        <ProfilePage
          business={profileData.business}
          profile={profileData.profile}
          sections={profileData.sections}
          themeClasses={themeClasses}
        />
      </div>
    </>
  );
}
