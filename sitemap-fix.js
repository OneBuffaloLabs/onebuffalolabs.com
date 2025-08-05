const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'out', 'sitemap-0.xml');

try {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  console.log('✅ Sitemap read successfully.');

  // This regex finds all image URLs that incorrectly have a trailing slash.
  const regex = /<loc>(https?:\/\/[^\s<]+?\.(?:png|jpg|jpeg|gif|svg))\/<\/loc>/g;

  // We replace the matched URL with the same URL but without the trailing slash.
  const fixedSitemap = sitemap.replace(regex, '<loc>$1</loc>');

  fs.writeFileSync(sitemapPath, fixedSitemap, 'utf8');
  console.log('✅ Sitemap image URLs fixed.');
} catch (err) {
  console.error('❌ Error fixing sitemap:', err);
}
