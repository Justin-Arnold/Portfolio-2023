import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcssNesting from 'tailwindcss/nesting';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

export default defineConfig({
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true
        },
        css: {
            postcss: {
                plugins: [tailwindcssNesting()]
            }
        }
    },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false
            }
        }),
        storyblok({
            accessToken: process.env.STORYBLOK_TOKEN,
            bridge: import.meta.env.VITE_ENVIRONMENT === "preview" ? true : false,
            apiOptions: {
                region: "us"
            },
            components: {
                project_list: "components/storyblok/ProjectList",
                project: "components/storyblok/ProjectListCard"
            }
        }),
        vue(),
    ]
});