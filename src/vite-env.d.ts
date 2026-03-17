/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_S3_BASE_URL: string
  readonly VITE_FORMSPREE_FORM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
