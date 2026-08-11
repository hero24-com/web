/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/careers', destination: '/recruits', permanent: true },
      {
        source: '/careers/assessment',
        destination: '/recruits/assessment',
        permanent: true,
      },
    ];
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
