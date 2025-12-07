import { createClient } from "microcms-js-sdk"

// config das variaveis de ambiente para receber dados do microcms
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
})
