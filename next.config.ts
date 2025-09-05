import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/scss")],
    prependData: `
      @use "sass:color";
      @use "sass:list"; 
      @use "sass:map";
      @use "sass:math";
      @use "sass:meta";
      @use "sass:selector";
      @use "sass:string";
      @use "scss/_function" as *;
      @use "scss/_mixin" as *;
    `,
    quietDeps: true,
  },
};

export default nextConfig;
