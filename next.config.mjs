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
};

export default nextConfig;
