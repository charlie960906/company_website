const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://hyjdevelop.com';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/about/admin', changefreq: 'monthly', priority: 0.6 },
  { url: '/about/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/about/join', changefreq: 'monthly', priority: 0.6 },
  { url: '/tutorgo', changefreq: 'weekly', priority: 0.7 },
  { url: '/community/communityrules', changefreq: 'monthly', priority: 0.7 },
  { url: '/partner', changefreq: 'monthly', priority: 0.7 },
  { url: '/updates', changefreq: 'weekly', priority: 0.7 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  { url: '/security', changefreq: 'yearly', priority: 0.5 },
  { url: '/freedom', changefreq: 'yearly', priority: 0.5 },
  { url: '/service', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.4 },
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ sitemap.xml 已產生於 public 目錄');
});