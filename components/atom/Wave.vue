<template>
    <div class="after:h-[300vh] after:w-[100vw] after:absolute after:content-[''] after:text-white/0 after:bg-white" :class="cssOpacityValue">
        <svg class=" relative w-full h-15vh min-h-100px max-h-150px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g :class="reverse ? 'parallax-reverse' : 'parallax'">
                <use
                xlink:href="#gentle-wave"
                x="48" :y="waveSize[height]"
                :class="svgOpacityValue"
                />
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">

const waveSize = ref({
    'xs': '9',
    'sm': '7',
    'md': '5',
    'lg': '3',
    'xl': '1'
})

const svgOpacityValue = computed(() => {
    //switch statement for props.opacity
    switch (props.opacity) {
        case '10':
            return props.color === 'white' ? 'fill-white/10 dark:fill-slate-700/10' : 'fill-blue-500/10 dark:fill-slate-700/10'
        case '30':
            return props.color === 'white' ? 'fill-white/30 dark:fill-slate-700/30' : 'fill-blue-500/30 dark:fill-slate-700/30'
        case '50':
            return props.color === 'white' ? 'fill-white/50 dark:fill-slate-700/50' : 'fill-blue-500/50 dark:fill-slate-700/50'
        case '70':
            return props.color === 'white' ? 'fill-white/70 dark:fill-slate-700/70' : 'fill-blue-500/70 dark:fill-slate-700/70'
        case '90':
            return props.color === 'white' ? 'fill-white/90 dark:fill-slate-700/90' : 'fill-blue-500/90 dark:fill-slate-700/90'
        default:
            return props.color === 'white' ? 'fill-white dark:fill-slate-700' : 'fill-blue-500 dark:fill-slate-700'
    }
})

const cssOpacityValue = computed(() => {
    //switch statement for props.opacity
    switch (props.opacity) {
        case '10':
            return props.color === 'white' ? 'after:bg-white/10 after:dark:bg-slate-700/10' : 'after:bg-blue-500/10 after:dark:bg-slate-700/10'
        case '30':
            return props.color === 'white' ? 'after:bg-white/30 after:dark:bg-slate-700/30' : 'after:bg-blue-500/30 after:dark:bg-slate-700/30'
        case '50':
            return props.color === 'white' ? 'after:bg-white/50 after:dark:bg-slate-700/50' : 'after:bg-blue-500/50 after:dark:bg-slate-700/50'
        case '70':
            return props.color === 'white' ? 'after:bg-white/70 after:dark:bg-slate-700/70' : 'after:bg-blue-500/70 after:dark:bg-slate-700/70'
        case '90':
            return props.color === 'white' ? 'bg-white/90 dark:bg-slate-700/90' : 'bg-blue-500/90 dark:bg-slate-700/90'
        default:
            return ''
    }
})

const props = defineProps({
    opacity: {
        type: String,
    },
    height: {
        type: String,
        default: 'md',
    },
    animationOffset: {
        type: Number,
        default: 0,
    },
    animationDuration: {
        type: Number,
        default: 7,
    },
    reverse: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: 'white',
    },
})

</script>

<style scoped>
.parallax > use {
    animation: move-forever 25s cubic-bezier(.5,.45,.5,.55) infinite;
}

.parallax-reverse > use {
    animation: move-forever 25s cubic-bezier(.5,.45,.5,.55) infinite reverse;
}
.parallax > use {
    animation-delay: v-bind(animationOffset+'s');
    animation-duration: v-bind(animationDuration+'s');
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% {
        transform: translate3d(85px,0,0);
    }
}
</style>