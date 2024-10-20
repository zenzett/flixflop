const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
        // experimental: {
        //   serverActions: true,
        // },
      },
    ];
  },
};

export default nextConfig;
