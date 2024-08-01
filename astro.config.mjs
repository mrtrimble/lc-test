import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '6smqkhnr',
    dataset: 'production',
    useCdn: false,
    studioBasePath: '/admin'
  }), react()],
  output: "server",
  adapter: netlify()
});