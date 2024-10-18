const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["m.media-amazon.com"], // Tambahkan domain di sini
  },
};

export default nextConfig;
