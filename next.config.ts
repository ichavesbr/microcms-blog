import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,

  // adiciona regra para aceitar imagens deste domínio específico do microCMS
  images: {
    remotePatterns: [new URL("https://images.microcms-assets.io/**")],
  },
}

export default nextConfig
