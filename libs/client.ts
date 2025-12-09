import { createClient } from "microcms-js-sdk"

// lança erro se a variável de ambiente MICROCMS_SERVICE_DOMAIN não estiver definida
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required")
}

// lança erro se a variável de ambiente MICROCMS_API_KEY não estiver definida
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required")
}

// config variáveis de ambiente para receber dados do microcms
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
})
