import { Suspense } from 'react';
import { LandingLayout } from '@/components/layout';
import { Container, Section } from '@/components/ui';
import { BlogHero, BlogSearch, BlogCategoryList } from '@/features/blog/client';
import { BlogPostGrid, BlogSidebar } from '@/features/blog/server';
import { listCategories } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, guides, and insights for service businesses. Learn how to grow your business with CRM, scheduling, invoicing, and more.',
  keywords: [
    'service business blog',
    'small business tips',
    'CRM tips',
    'scheduling tips',
    'business growth',
    'field service management',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Blog | ZuviaOne',
    description:
      'Tips, guides, and insights for service businesses. Learn how to grow your business.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

// Schema for blog listing
function BlogListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${siteConfig.name} Blog`,
    description: 'Tips, guides, and insights for service businesses.',
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper functions for page title/description
function getPageTitle(searchQuery?: string, tag?: string): string {
  if (searchQuery) {
    return `Search: "${searchQuery}"`;
  }
  if (tag) {
    return `Tagged: ${tag}`;
  }
  return 'Blog';
}

function getPageDescription(searchQuery?: string, tag?: string): string {
  if (searchQuery) {
    return `Search results for "${searchQuery}"`;
  }
  if (tag) {
    return `Articles tagged with "${tag}"`;
  }
  return 'Tips, guides, and insights to help you grow your service business.';
}

type BlogPageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
    tag?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = params.page ? Number.parseInt(params.page, 10) : 1;
  const searchQuery = params.q || undefined;
  const tag = params.tag || undefined;

  // Get categories for filter pills (with error handling)
  let categories: Awaited<ReturnType<typeof listCategories>>['data']['categories'] = [];
  try {
    const categoriesResponse = await listCategories();
    ({ categories } = categoriesResponse.data);
  } catch {
    // If API fails, continue with empty categories
    console.error('Failed to fetch blog categories');
  }

  const pageTitle = getPageTitle(searchQuery, tag);
  const pageDescription = getPageDescription(searchQuery, tag);

  return (
    <LandingLayout>
      <BlogListSchema />

      {/* Hero */}
      <BlogHero
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      {/* Main Content */}
      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Column */}
            <div>
              {/* Search & Filters */}
              <div className="mb-8 space-y-4">
                <BlogSearch defaultValue={searchQuery} />
                <BlogCategoryList categories={categories} variant="pills" />
              </div>

              {/* Posts Grid */}
              <Suspense
                fallback={
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      // eslint-disable-next-line react/no-array-index-key -- Static skeleton loaders
                      <div key={`skeleton-${i}`} className="bg-neutral-100 rounded-xl h-80 animate-pulse" />
                    ))}
                  </div>
                }
              >
                <BlogPostGrid
                  params={{
                    page,
                    q: searchQuery,
                    tag,
                    limit: 12,
                  }}
                  basePath="/blog"
                />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Suspense
                  fallback={
                    <div className="space-y-6">
                      <div className="bg-neutral-100 rounded-xl h-48 animate-pulse" />
                      <div className="bg-neutral-100 rounded-xl h-64 animate-pulse" />
                    </div>
                  }
                >
                  <BlogSidebar showCategories={false} />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
