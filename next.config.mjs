const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
