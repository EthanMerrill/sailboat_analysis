/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['app.supabase.com', 'bit.ly'],
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/pages/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: 'app.supabase.com' },
  //     ]
  //     }
  //   ]
  // },
  reactStrictMode: true,
}

module.exports = nextConfig
