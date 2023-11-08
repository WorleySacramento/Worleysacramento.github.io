/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{unoptimized : true}
  
}
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }

module.exports = nextConfig
