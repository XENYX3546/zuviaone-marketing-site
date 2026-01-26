// Link in Bio Feature Page

import type { FeaturePageData } from '../types';

export const linkInBio: FeaturePageData = {
  slug: 'link-in-bio',
  seo: {
    title: 'Link in Bio Page Builder | Linktree Alternative',
    description: 'Create a beautiful link in bio page for social media. Drive traffic to your business. Analytics included. Free forever.',
    keywords: ['link in bio', 'linktree alternative', 'bio link', 'instagram link', 'social media links', 'link page'],
  },
  hero: {
    badge: 'Link in Bio',
    title: 'One link.',
    highlight: 'Endless possibilities.',
    description: 'A beautiful landing page for all your important links. Perfect for social media bios. Analytics included.',
    stats: [
      { value: 'Free', label: 'Forever' },
      { value: '5min', label: 'Setup time' },
      { value: '∞', label: 'Links' },
    ],
  },
  problemSolution: {
    title: 'One bio link isn\'t enough',
    description: 'You need to share multiple destinations.',
    items: [
      {
        problem: 'Social media only allows one link in your bio',
        solution: 'One link leads to a page with all your important links',
      },
      {
        problem: 'Generic link pages don\'t match your brand',
        solution: 'Fully customisable with your colours, logo, and style',
      },
      {
        problem: 'No idea if anyone is clicking your links',
        solution: 'Built-in analytics show clicks and visitor data',
      },
      {
        problem: 'Third-party tools cost money and add complexity',
        solution: 'Built into ZuviaOne — free and integrated',
      },
    ],
  },
  solution: {
    title: 'Your links, your brand',
    description: 'Beautiful link pages in minutes.',
    features: [
      { icon: 'link', title: 'Unlimited Links', description: 'Add as many links as you need.' },
      { icon: 'palette', title: 'Full Customisation', description: 'Match your brand with custom colours and themes.' },
      { icon: 'image', title: 'Rich Content', description: 'Add images, videos, and descriptions.' },
      { icon: 'bar-chart', title: 'Analytics', description: 'See clicks, views, and visitor data.' },
      { icon: 'smartphone', title: 'Mobile Optimised', description: 'Looks perfect on every device.' },
      { icon: 'globe', title: 'Custom Domain', description: 'Use your own domain name.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More traffic, better engagement.',
    items: [
      { title: 'Maximise your bio link', description: 'Direct followers to everything that matters.' },
      { title: 'Stay on brand', description: 'Customisation means it looks like you.' },
      { title: 'Track performance', description: 'Know which links get clicked most.' },
      { title: 'Save money', description: 'No need for separate link-in-bio tools.' },
    ],
  },
  useCases: {
    title: 'Link in bio for everyone',
    items: [
      { industry: 'Social Media', description: 'Perfect for Instagram, TikTok, and Twitter bios.' },
      { industry: 'Content Creators', description: 'Share all your content destinations.' },
      { industry: 'Small Businesses', description: 'Drive traffic to booking, website, and social.' },
    ],
  },
  cta: {
    title: 'Ready to create your link page?',
    description: 'Build your link in bio page for free.',
  },
};
