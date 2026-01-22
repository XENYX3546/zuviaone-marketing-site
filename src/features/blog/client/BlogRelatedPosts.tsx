'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { formatReadingTime, blogPaths, DEFAULT_POST_IMAGE } from '../shared';
import type { RelatedPost } from '@/lib/blog';

type BlogRelatedPostsProps = {
  posts: RelatedPost[];
  title?: string;
};

export function BlogRelatedPosts({ posts, title = 'Related Articles' }: BlogRelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-8">{title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link
              href={blogPaths.post(post.slug)}
              className="group block bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.featuredImageUrl || DEFAULT_POST_IMAGE}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>
                )}

                <div className="mt-3 flex items-center justify-between text-sm text-neutral-500">
                  <span>{post.authorName}</span>
                  <span>{formatReadingTime(post.readingTimeMinutes)}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
