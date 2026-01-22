import { listPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRFC822Date(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toUTCString();
}

export async function GET() {
  try {
    const postsResponse = await listPosts({ limit: 50 });
    const posts = postsResponse.data;

    const rssItems = posts
      .map((post) => {
        const postUrl = `${siteConfig.url}/blog/${post.slug}`;
        const imageTag = post.featuredImage.url
          ? `<enclosure url="${escapeXml(post.featuredImage.url)}" type="image/jpeg" />`
          : '';
        const categories = post.categories
          .map((cat) => `<category>${escapeXml(cat.name)}</category>`)
          .join('\n        ');

        return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${formatRFC822Date(post.publishedAt)}</pubDate>
      <author>${escapeXml(post.author.displayName)}</author>
      ${post.excerpt ? `<description>${escapeXml(post.excerpt)}</description>` : ''}
      ${categories}
      ${imageTag}
    </item>`;
      })
      .join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Tips, guides, and insights for service businesses. Learn how to grow your business with CRM, scheduling, invoicing, and more.</description>
    <language>en-gb</language>
    <lastBuildDate>${formatRFC822Date(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteConfig.url}/logo.png</url>
      <title>${escapeXml(siteConfig.name)} Blog</title>
      <link>${siteConfig.url}/blog</link>
    </image>
${rssItems}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);

    // Return a minimal valid RSS feed on error
    const fallbackRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Tips, guides, and insights for service businesses.</description>
    <language>en-gb</language>
  </channel>
</rss>`;

    return new Response(fallbackRss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }
}
