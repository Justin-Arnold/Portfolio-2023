import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
    // experimental: {
    //     assets: true
    // },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false
            }
        }),
        vue(),
        sanity({
            projectId: 'lcxq2gzs',
            dataset: 'production',
            apiVersion: '2023-02-08',
            useCdn: false,
        })
    ]
});