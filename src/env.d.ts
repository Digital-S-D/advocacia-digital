/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PRISMIC_REPOSITORY_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
