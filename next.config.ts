import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
}
// adiciona regra para aceitar imagens deste domínio específico do microCMS
module.exports = {
  images: {
    remotePatterns: [new URL("https://images.microcms-assets.io/**")],
  },
}

export default nextConfig
