/*
changefreq ['always','hourly','daily','weekly','monthly','anual','never']
*/

const excludedPaths = ['/404'];

const transformBody = {
  '/': { priority: 1, changefreq: 'daily' },
};

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://whizart.co/',
  autoLastmod: true,
  generateRobotsTxt: true,
  exclude: excludedPaths,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: excludedPaths,
        allow: ['/'],
      },
    ],
  },
  transform: async (config, path) => {
    if (transformBody[path]) {
      return {
        loc: path,
        changefreq: transformBody[path].changefreq || config.changefreq,
        priority: transformBody[path].priority || config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs || [],
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
};
