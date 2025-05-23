/** @type {import('next').NextConfig} */


// 用于为应用设置基础路径
// 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
// let basePath = `/${repo}`;

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }

const repo = "wkx_blog";
const isProd = process.env.NODE_ENV === 'production'
let assetPrefix = isProd ? `/${repo}/` : ''

const nextConfig = {
  env: {
    imgPath: assetPrefix,
  },
  assetPrefix,
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
  // distDir:"out",
  // output:"standalone",
  output: 'export',
};

export default nextConfig;
