'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui';
import { formatDate, formatReadingTime, blogPaths, DEFAULT_POST_IMAGE } from '../shared';
import type { PublicPost } from '@/lib/blog';

type BlogPostCardProps = {
  post: PublicPost;
  featured?: boolean;
  priority?: boolean;
};

export function BlogPostCard({ post, featured = false, priority = false }: BlogPostCardProps) {
  const imageUrl = post.featuredImage.url || DEFAULT_POST_IMAGE;
  const primaryCategory = post.categories[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={featured ? 'md:col-span-2 lg:col-span-2' : ''}
    >
      <Link
        href={blogPaths.post(post.slug)}
        className="group block bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[2/1]' : 'aspect-[16/10]'}`}>
          <Image
            src={imageUrl}
            alt={post.featuredImage.alt || post.title}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
          />
          {post.isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="primary">Featured</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-5 ${featured ? 'md:p-6' : ''}`}>
          {/* Category & Reading Time */}
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            {primaryCategory && (
              <span className="text-blue-600 font-medium">{primaryCategory.name}</span>
            )}
            {primaryCategory && post.readingTimeMinutes && (
              <span className="text-neutral-300">|</span>
            )}
            {post.readingTimeMinutes && (
              <span>{formatReadingTime(post.readingTimeMinutes)}</span>
            )}
          </div>

          {/* Title */}
          <h2
            className={`font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors line-clamp-2 ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className={`mt-2 text-neutral-600 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
              {post.excerpt}
            </p>
          )}

          {/* Author & Date */}
          <div className="mt-4 flex items-center gap-3">
            {post.author.avatarUrl && (
              <Image
                src={post.author.avatarUrl}
                alt={post.author.displayName}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div className="text-sm">
              <span className="font-medium text-neutral-900">{post.author.displayName}</span>
              <span className="text-neutral-400 mx-2">·</span>
              <time dateTime={post.publishedAt} className="text-neutral-500">
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
