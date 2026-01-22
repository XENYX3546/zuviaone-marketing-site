import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { LandingLayout } from '@/components/layout';
import { Container, Section } from '@/components/ui';
import { BlogHero, BlogCategoryList } from '@/features/blog/client';
import { BlogPostGrid, BlogSidebar } from '@/features/blog/server';
import { listCategories, listPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

// Generate static params for all categories
export async function generateStaticParams() {
  try {
    const response = await listCategories();
    return response.data.categories.map((category) => ({
      slug: category.slug,
    }));
  } catch {
    return [];
  }
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await listCategories();
    const category = response.data.categories.find((c) => c.slug === slug);

    if (!category) {
      return { title: 'Category Not Found' };
    }

    const title = category.metaTitle || `${category.name} Articles`;
    const description =
      category.metaDescription ||
      category.description ||
      `Browse all articles in ${category.name}. Tips, guides, and insights for service businesses.`;

    return {
      title,
      description,
      alternates: {
        canonical: `${siteConfig.url}/blog/category/${slug}`,
      },
      openGraph: {
        title: `${title} | ${siteConfig.name} Blog`,
        description,
        url: `${siteConfig.url}/blog/category/${slug}`,
        type: 'website',
      },
    };
  } catch {
    return { title: 'Category Not Found' };
  }
}

// Schema for category archive
function CategorySchema({
  category,
  postCount,
}: {
  category: { name: string; slug: string; description: string | null };
  postCount: number;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Articles`,
    description:
      category.description || `Articles about ${category.name} for service businesses.`,
    url: `${siteConfig.url}/blog/category/${category.slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: `${siteConfig.name} Blog`,
      url: `${siteConfig.url}/blog`,
    },
    numberOfItems: postCount,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = pageParam ? Number.parseInt(pageParam, 10) : 1;

  // Get all categories and find the current one
  const categoriesResponse = await listCategories();
  const {categories} = categoriesResponse.data;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Get post count for this category
  const postsResponse = await listPosts({ category: slug, limit: 1 });
  const postCount = postsResponse.meta.pagination.total;

  return (
    <LandingLayout>
      <CategorySchema category={category} postCount={postCount} />

      {/* Hero */}
      <BlogHero
        title={category.name}
        description={
          category.description ||
          `Browse ${postCount} ${postCount === 1 ? 'article' : 'articles'} about ${category.name.toLowerCase()}.`
        }
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: category.name },
        ]}
      />

      {/* Main Content */}
      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Column */}
            <div>
              {/* Category Pills */}
              <div className="mb-8">
                <BlogCategoryList
                  categories={categories}
                  activeSlug={slug}
                  variant="pills"
                />
              </div>

              {/* Posts Grid */}
              <Suspense
                fallback={
                  <div className="grid sm:grid-cols-2 gap-6">
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
                    category: slug,
                    limit: 12,
                  }}
                  basePath={`/blog/category/${slug}`}
                  showFeaturedFirst={false}
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
                  <BlogSidebar activeCategorySlug={slug} />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
