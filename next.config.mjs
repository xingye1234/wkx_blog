/** @type {import('next').NextConfig} */
const repo = "wkx_blog";
const isProd = process.env.NODE_ENV === 'production'
let assetPrefix = isProd ? `/${repo}/` : ''

// 用于为应用设置基础路径
// 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
let basePath = `/${repo}`;

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }
const nextConfig = {
  env: {
    imgPath: assetPrefix,
  },
  assetPrefix,
  basePath, //注：未知原因开发模式下启动找不到页面，需要注释掉
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
  output:'export',
};

export default nextConfig;
