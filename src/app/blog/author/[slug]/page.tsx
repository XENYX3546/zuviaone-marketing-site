import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Breadcrumbs, Icon } from '@/components/ui';
import { BlogPostGrid, BlogSidebar } from '@/features/blog/server';
import { listAuthors, getAuthor, listPosts, BlogApiError } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';
import type { SocialLinks } from '@/lib/blog';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

// Build author description without nested template literals
function buildAuthorDescription(author: {
  displayName: string;
  jobTitle: string | null;
  company: string | null;
}): string {
  let description = `Articles by ${author.displayName}`;
  if (author.jobTitle) {
    description += `, ${author.jobTitle}`;
  }
  if (author.company) {
    description += ` at ${author.company}`;
  }
  return `${description}.`;
}

// Generate static params for all authors
export async function generateStaticParams() {
  try {
    const response = await listAuthors();
    return response.data.authors.map((author) => ({
      slug: author.slug,
    }));
  } catch {
    return [];
  }
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await getAuthor(slug);
    const { author } = response.data;

    const title = `${author.displayName} - Author`;
    const description = author.bio || buildAuthorDescription(author);

    return {
      title,
      description,
      alternates: {
        canonical: `${siteConfig.url}/blog/author/${slug}`,
      },
      openGraph: {
        title: `${title} | ${siteConfig.name} Blog`,
        description,
        url: `${siteConfig.url}/blog/author/${slug}`,
        type: 'profile',
        images: author.avatarUrl ? [{ url: author.avatarUrl }] : undefined,
      },
    };
  } catch {
    return { title: 'Author Not Found' };
  }
}

// BreadcrumbList schema for author pages
function BreadcrumbSchema({ name, slug }: { name: string; slug: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: `${siteConfig.url}/blog/author/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema for author profile
function AuthorSchema({
  author,
}: {
  author: {
    displayName: string;
    slug: string;
    bio: string | null;
    avatarUrl: string | null;
    jobTitle: string | null;
    company: string | null;
    socialLinks: SocialLinks;
  };
}) {
  const sameAs = [
    author.socialLinks.twitter,
    author.socialLinks.linkedin,
    author.socialLinks.github,
    author.socialLinks.website,
  ].filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.displayName,
    url: `${siteConfig.url}/blog/author/${author.slug}`,
    image: author.avatarUrl,
    description: author.bio,
    jobTitle: author.jobTitle,
    worksFor: author.company
      ? {
          '@type': 'Organization',
          name: author.company,
        }
      : undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: 'twitter' | 'linkedin' | 'github' | 'globe';
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
      aria-label={label}
    >
      <Icon name={icon} size={20} />
    </a>
  );
}

export default async function AuthorPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = pageParam ? Number.parseInt(pageParam, 10) : 1;

  let author: Awaited<ReturnType<typeof getAuthor>>['data']['author'] | null = null;
  let postCount = 0;

  try {
    const [authorResponse, postsResponse] = await Promise.all([
      getAuthor(slug, { postsLimit: 0 }),
      listPosts({ author: slug, limit: 1 }),
    ]);
    ({ author } = authorResponse.data);
    ({ total: postCount } = postsResponse.meta.pagination);
  } catch (error) {
    if (error instanceof BlogApiError && error.code === 'BLOG_AUTHOR_NOT_FOUND') {
      notFound();
    }
    // For any other error, show 404 instead of crashing
    console.error('Failed to fetch author data:', error);
    notFound();
  }

  if (!author) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: author.displayName },
  ];

  return (
    <LandingLayout>
      <BreadcrumbSchema name={author.displayName} slug={slug} />
      <AuthorSchema author={author} />

      {/* Author Profile Header */}
      <Section className="bg-gradient-to-b from-blue-50/50 to-white pt-8 pb-12">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            {author.avatarUrl && (
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white shadow-lg">
                <Image
                  src={author.avatarUrl}
                  alt={author.displayName}
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {author.displayName}
              </h1>

              {(author.jobTitle || author.company) && (
                <p className="mt-1 text-lg text-neutral-600">
                  {author.jobTitle}
                  {author.jobTitle && author.company && ' at '}
                  {author.company}
                </p>
              )}

              {author.bio && (
                <p className="mt-4 text-neutral-600 max-w-2xl">{author.bio}</p>
              )}

              {/* Stats & Social */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="text-sm">
                  <span className="font-semibold text-neutral-900">{postCount}</span>
                  <span className="text-neutral-500 ml-1">
                    {postCount === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {author.socialLinks.twitter && (
                    <SocialLink
                      href={author.socialLinks.twitter}
                      icon="twitter"
                      label="Twitter"
                    />
                  )}
                  {author.socialLinks.linkedin && (
                    <SocialLink
                      href={author.socialLinks.linkedin}
                      icon="linkedin"
                      label="LinkedIn"
                    />
                  )}
                  {author.socialLinks.github && (
                    <SocialLink
                      href={author.socialLinks.github}
                      icon="github"
                      label="GitHub"
                    />
                  )}
                  {author.socialLinks.website && (
                    <SocialLink
                      href={author.socialLinks.website}
                      icon="globe"
                      label="Website"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Author's Posts */}
      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Column */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Articles by {author.displayName}
              </h2>

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
                    author: slug,
                    limit: 12,
                  }}
                  basePath={`/blog/author/${slug}`}
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
                  <BlogSidebar />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
