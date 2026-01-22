import { MetadataRoute } from 'next';
import { siteConfig, featurePageSlugs, industrySlugs } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Feature pages (/features/crm, etc.)
  const featurePages: MetadataRoute.Sitemap = featurePageSlugs.map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Industries hub page (/for)
  const industriesHubPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/for`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Industry landing pages (/for/carpet-cleaners, etc.)
  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/for/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry + Feature pages (/for/carpet-cleaners/crm, etc.)
  const industryFeaturePages: MetadataRoute.Sitemap = industrySlugs.flatMap((industry) =>
    featurePageSlugs.map((feature) => ({
      url: `${baseUrl}/for/${industry}/${feature}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...featurePages, ...industriesHubPage, ...industryPages, ...industryFeaturePages];
}
