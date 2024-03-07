import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mkcert from 'vite-plugin-mkcert'
import tailwindcssNesting from 'tailwindcss/nesting';
import { squooshImageService } from "astro/config";
import storyblok from '@storyblok/astro';
import vercelStatic from '@astrojs/vercel/static';
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    output: 'static',
    adapter: vercelStatic(),
    vite: {
        plugins: [mkcert()],
        server: {
            https: true
        },
        css: {
            postcss: {
                plugins: [tailwindcssNesting()]
            }
        }
    },
    image: {
        service: squooshImageService(),
    },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false
            }
        }),
        storyblok({
            accessToken: import.meta.env.STORYBLOK_TOKEN ?? process.env.STORYBLOK_TOKEN,
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