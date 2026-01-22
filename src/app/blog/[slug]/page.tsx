import Image from 'next/image';
import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Breadcrumbs } from '@/components/ui';
import {
  BlogPostContent,
  BlogAuthorCard,
  BlogCategoryList,
  BlogTagList,
  BlogShareButtons,
  BlogPostNavigation,
  BlogRelatedPosts,
} from '@/features/blog/client';
import { formatDate, formatReadingTime } from '@/features/blog/shared';
import { getPost, listPosts, BlogApiError } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Helper to build OG images array without nested ternary
function getOgImages(ogImageUrl: string | null, featuredImageUrl: string | null) {
  if (ogImageUrl) {
    return [{ url: ogImageUrl, width: 1200, height: 630 }];
  }
  if (featuredImageUrl) {
    return [{ url: featuredImageUrl }];
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const response = await listPosts({ limit: 50 });
    return response.data.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await getPost(slug);
    const { post } = response.data;
    const { seo } = post;

    return {
      title: seo.metaTitle || post.title,
      description: seo.metaDescription || post.excerpt || undefined,
      keywords: seo.metaKeywords?.split(',').map((k) => k.trim()) || undefined,
      alternates: {
        canonical: seo.canonicalUrl || `${siteConfig.url}/blog/${slug}`,
      },
      openGraph: {
        title: seo.ogTitle || post.title,
        description: seo.ogDescription || post.excerpt || undefined,
        url: `${siteConfig.url}/blog/${slug}`,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author.displayName],
        images: getOgImages(seo.ogImageUrl, post.featuredImage.url),
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.ogTitle || post.title,
        description: seo.ogDescription || post.excerpt || undefined,
        images: seo.ogImageUrl || post.featuredImage.url || undefined,
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    const response = await getPost(slug);
    ({ post } = response.data);
  } catch (error) {
    if (error instanceof BlogApiError && (error.code === 'BLOG_POST_NOT_FOUND' || error.code === 'BLOG_POST_NOT_PUBLISHED')) {
      notFound();
    }
    throw error;
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  return (
    <LandingLayout>
      {/* JSON-LD Structured Data */}
      {post.structuredData && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.structuredData) }}
        />
      )}

      {/* Article Header */}
      <Section className="bg-gradient-to-b from-blue-50/50 to-white pt-8 pb-0">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbs} className="mb-6" />

            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="mb-4">
                <BlogCategoryList categories={post.categories} />
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mt-4 text-xl text-neutral-600">{post.excerpt}</p>
            )}

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              {/* Author */}
              <BlogAuthorCard author={post.author} variant="inline" />

              <span className="text-neutral-300">|</span>

              {/* Date */}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>

              {/* Reading Time */}
              {post.readingTimeMinutes && (
                <>
                  <span className="text-neutral-300">|</span>
                  <span>{formatReadingTime(post.readingTimeMinutes)}</span>
                </>
              )}
            </div>

            {/* Share */}
            <div className="mt-6">
              <BlogShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      {post.featuredImage.url && (
        <Section className="py-8">
          <Container>
            <div className="max-w-4xl mx-auto">
              <figure>
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                    priority
                  />
                </div>
                {post.featuredImage.caption && (
                  <figcaption className="mt-3 text-center text-sm text-neutral-500">
                    {post.featuredImage.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          </Container>
        </Section>
      )}

      {/* Article Content */}
      <Section className="pt-4">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Content */}
            <BlogPostContent content={post.content} />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <BlogTagList tags={post.tags} />
              </div>
            )}

            {/* Author Card (Full) */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                About the Author
              </h3>
              <BlogAuthorCard author={post.author} variant="full" showSocial />
            </div>

            {/* Post Navigation */}
            <BlogPostNavigation
              previous={post.navigation.previous}
              next={post.navigation.next}
            />

            {/* Related Posts */}
            <BlogRelatedPosts posts={post.relatedPosts} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
