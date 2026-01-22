import { type MetadataRoute } from 'next';
import { listPosts, listCategories, listAuthors } from '@/lib/blog';
import { siteConfig, featurePageSlugs, industrySlugs } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Static pages
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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
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

  // Blog pages (dynamic from API)
  let blogPostPages: MetadataRoute.Sitemap = [];
  let blogCategoryPages: MetadataRoute.Sitemap = [];
  let blogAuthorPages: MetadataRoute.Sitemap = [];

  try {
    // Fetch all blog posts (paginate to get all)
    const postsResponse = await listPosts({ limit: 50 });
    blogPostPages = postsResponse.data.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      // Include featured images in sitemap for image SEO
      images: post.featuredImage.url ? [post.featuredImage.url] : undefined,
    }));

    // Fetch all categories
    const categoriesResponse = await listCategories();
    blogCategoryPages = categoriesResponse.data.categories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Fetch all authors
    const authorsResponse = await listAuthors();
    blogAuthorPages = authorsResponse.data.authors.map((author) => ({
      url: `${baseUrl}/blog/author/${author.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }));
  } catch {
    // If blog API fails, continue with other pages
    console.error('Failed to fetch blog data for sitemap');
  }

  return [
    ...staticPages,
    ...featurePages,
    ...industriesHubPage,
    ...industryPages,
    ...industryFeaturePages,
    ...blogPostPages,
    ...blogCategoryPages,
    ...blogAuthorPages,
  ];
}
