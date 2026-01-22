import { listPosts } from '@/lib/blog';
import { BlogPostCard, BlogPagination } from '../client';
import type { ListPostsParams } from '@/lib/blog';

type BlogPostGridProps = {
  params?: ListPostsParams;
  basePath?: string;
  showFeaturedFirst?: boolean;
};

export async function BlogPostGrid({
  params = {},
  basePath = '/blog',
  showFeaturedFirst = true,
}: BlogPostGridProps) {
  const response = await listPosts({
    limit: 12,
    ...params,
  });

  const { data: posts, meta } = response;

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-neutral-600">No articles found.</p>
        {params.q && (
          <p className="mt-2 text-neutral-500">
            Try adjusting your search or browse all articles.
          </p>
        )}
      </div>
    );
  }

  // Sort to show featured first on first page
  const sortedPosts =
    showFeaturedFirst && meta.pagination.page === 1
      ? [...posts].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
      : posts;

  // Get the first featured post for larger display
  const featuredPost =
    showFeaturedFirst && meta.pagination.page === 1
      ? sortedPosts.find((p) => p.isFeatured)
      : null;

  const regularPosts = featuredPost
    ? sortedPosts.filter((p) => p.id !== featuredPost.id)
    : sortedPosts;

  // Build search params for pagination
  const searchParams: Record<string, string> = {};
  if (params.category) {
    searchParams.category = params.category;
  }
  if (params.author) {
    searchParams.author = params.author;
  }
  if (params.tag) {
    searchParams.tag = params.tag;
  }
  if (params.q) {
    searchParams.q = params.q;
  }

  return (
    <div>
      {/* Post Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Post (larger) */}
        {featuredPost && <BlogPostCard post={featuredPost} featured priority />}

        {/* Regular Posts */}
        {regularPosts.map((post, idx) => (
          <BlogPostCard key={post.id} post={post} priority={idx < 3} />
        ))}
      </div>

      {/* Pagination */}
      {meta.pagination.totalPages > 1 && (
        <div className="mt-12">
          <BlogPagination
            pagination={meta.pagination}
            basePath={basePath}
            searchParams={searchParams}
          />
        </div>
      )}
    </div>
  );
}
