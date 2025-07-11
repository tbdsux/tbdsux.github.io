/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PORTFOLIO_ADMIN_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}