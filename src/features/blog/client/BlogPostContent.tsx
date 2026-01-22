'use client';

import { cn } from '@/lib/utils';

type BlogPostContentProps = {
  content: string;
  className?: string;
};

/**
 * Renders HTML blog content with proper styling.
 * The content comes sanitized from the API.
 */
export function BlogPostContent({ content, className }: BlogPostContentProps) {
  return (
    <div
      className={cn(
        // Base typography
        'prose prose-neutral max-w-none',
        // Headings
        'prose-headings:font-semibold prose-headings:text-neutral-900',
        'prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4',
        'prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4',
        'prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3',
        'prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2',
        // Paragraphs
        'prose-p:text-neutral-700 prose-p:leading-relaxed',
        // Links
        'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline',
        // Lists
        'prose-ul:list-disc prose-ol:list-decimal',
        'prose-li:text-neutral-700 prose-li:marker:text-neutral-400',
        // Blockquotes
        'prose-blockquote:border-l-4 prose-blockquote:border-blue-500',
        'prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-neutral-600',
        // Code
        'prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
        'prose-code:text-sm prose-code:font-mono prose-code:text-neutral-800',
        'prose-code:before:content-none prose-code:after:content-none',
        // Pre (code blocks)
        'prose-pre:bg-neutral-900 prose-pre:text-neutral-100',
        'prose-pre:rounded-xl prose-pre:overflow-x-auto',
        // Images
        'prose-img:rounded-xl prose-img:shadow-md',
        // Tables
        'prose-table:w-full prose-table:border-collapse',
        'prose-th:bg-neutral-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold',
        'prose-td:p-3 prose-td:border-t prose-td:border-neutral-200',
        // Horizontal rules
        'prose-hr:border-neutral-200 prose-hr:my-8',
        // Strong/Bold
        'prose-strong:text-neutral-900 prose-strong:font-semibold',
        className
      )}
      // eslint-disable-next-line react/no-danger -- Content is sanitized by the API
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
