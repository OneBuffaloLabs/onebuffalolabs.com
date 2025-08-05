/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onebuffalolabs.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
};
