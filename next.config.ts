import nextra from "nextra";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withNextra = nextra({
  // Add markdown plugins here, as desired
});

export default withNextra(nextConfig);
