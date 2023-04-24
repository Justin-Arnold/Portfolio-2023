<template>
    <div ref="waveWrapper" class="relative w-full h-[15vh] translate-y-[-100%]">
        <div ref="wave1" class="absolute bottom-0 left-0 w-full">
            <Wave ref="wave1" height="xl" opacity="30" :animationDuration="7" :animationOffset="-2"/>
        </div>
        <div ref="wave2" class="absolute bottom-0 left-0 w-full">
            <Wave height="lg" reverse opacity="50" :animationDuration="10" :animationOffset="-3"/>
        </div>
        <div ref="wave3" class="absolute bottom-0 left-0 w-full">
            <Wave height="md" opacity="70" :animationDuration="13" :animationOffset="-4"/>
        </div>
        <div ref="wave4" class="absolute bottom-0 left-0 w-full">
            <Wave height="sm" reverse :animationDuration="20" :animationOffset="-5"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Wave from './Wave.vue'
import { defineProps, computed, ref, onMounted } from 'vue'

const waveWrapper = ref(null)
const wave1 = ref(null)
const wave2 = ref(null)
const wave3 = ref(null)
const wave4 = ref(null)
const speed = 15


//created life cycle hook
onMounted(() => {
    const waveWrapperBottom = document.documentElement.scrollTop
    const item1Pos = document.documentElement.scrollTop/2
    const item1PosPercent = (waveWrapperBottom / window.innerHeight) * 100
    const item1PosPercentScaled = item1PosPercent*speed
    wave1.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled)}%)`
    wave2.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled/2)}%)`
    wave3.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled/3)}%)`

    window.addEventListener('scroll', function() {
        //create a parrallax effect on item1 ref
        const item1Pos = document.documentElement.scrollTop
        const item1PosPercent = (item1Pos / window.innerHeight) * 100
        const item1PosPercentScaled = item1PosPercent*speed
        wave1.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled)}%)`
        wave2.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled/2)}%)`
        wave3.value.style.transform = `translateY(-${Math.floor(item1PosPercentScaled/3)}%)`
    })
});

</script>