// This file is for: import.meta.env.BASE_URL

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  // add custom env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}