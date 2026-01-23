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

function formatISO8601(isoDate: string): string {
  return new Date(isoDate).toISOString();
}

export async function GET() {
  try {
    const postsResponse = await listPosts({ limit: 50 });
    const posts = postsResponse.data;

    const latestUpdate = posts.length > 0
      ? formatISO8601(posts[0].publishedAt)
      : formatISO8601(new Date().toISOString());

    const atomEntries = posts
      .map((post) => {
        const postUrl = `${siteConfig.url}/blog/${post.slug}`;
        const categories = post.categories
          .map((cat) => `<category term="${escapeXml(cat.slug)}" label="${escapeXml(cat.name)}" />`)
          .join('\n      ');

        return `  <entry>
    <id>${postUrl}</id>
    <title>${escapeXml(post.title)}</title>
    <link href="${postUrl}" rel="alternate" type="text/html" />
    <published>${formatISO8601(post.publishedAt)}</published>
    <updated>${formatISO8601(post.publishedAt)}</updated>
    <author>
      <name>${escapeXml(post.author.displayName)}</name>
      <uri>${siteConfig.url}/blog/author/${post.author.slug}</uri>
    </author>
    ${post.excerpt ? `<summary type="text">${escapeXml(post.excerpt)}</summary>` : ''}
    ${categories}
    ${post.featuredImage.url ? `<link href="${escapeXml(post.featuredImage.url)}" rel="enclosure" type="image/jpeg" />` : ''}
  </entry>`;
      })
      .join('\n');

    const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${siteConfig.url}/blog</id>
  <title>${escapeXml(siteConfig.name)} Blog</title>
  <subtitle>Tips, guides, and insights for service businesses. Learn how to grow your business with CRM, scheduling, invoicing, and more.</subtitle>
  <link href="${siteConfig.url}/blog" rel="alternate" type="text/html" />
  <link href="${siteConfig.url}/atom.xml" rel="self" type="application/atom+xml" />
  <link href="${siteConfig.url}/feed.xml" rel="alternate" type="application/rss+xml" />
  <updated>${latestUpdate}</updated>
  <icon>${siteConfig.url}/favicon.ico</icon>
  <logo>${siteConfig.url}/logo.png</logo>
  <rights>© ${new Date().getFullYear()} ${escapeXml(siteConfig.legalName)}. All rights reserved.</rights>
  <generator>Next.js</generator>
${atomEntries}
</feed>`;

    return new Response(atom, {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating Atom feed:', error);

    const fallbackAtom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${siteConfig.url}/blog</id>
  <title>${escapeXml(siteConfig.name)} Blog</title>
  <subtitle>Tips, guides, and insights for service businesses.</subtitle>
  <link href="${siteConfig.url}/blog" rel="alternate" type="text/html" />
  <link href="${siteConfig.url}/atom.xml" rel="self" type="application/atom+xml" />
  <updated>${formatISO8601(new Date().toISOString())}</updated>
</feed>`;

    return new Response(fallbackAtom, {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    });
  }
}
