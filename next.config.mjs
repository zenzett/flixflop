const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
        // experimental: {
        //   serverActions: true,
        // },
      },
    ];
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
