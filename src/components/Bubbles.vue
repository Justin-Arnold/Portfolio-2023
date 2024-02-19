<template>
    <div class="bubbleWrapper h-full" ref="canvasWrapper">
        <canvas ref="canvas" class="h-full w-full"></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref } from 'vue'
import type { Ref } from 'vue'

const width = ref(0)
const height = ref(0)

const canvasWrapper: Ref<HTMLDivElement | null> = ref(null)
const canvas: Ref<HTMLCanvasElement | null> = ref(null)

const circles: Ref<Circle[]> = ref([])
const target = ref({x: 0, y: height.value})
const animateHeader = ref(true)

onMounted(() => {
    // Main
    initHeader();
    window.addEventListener('resize', onResize);

    function initHeader() {
        if (!canvasWrapper.value || !canvas.value) return;
        const canvasContext = canvas.value.getContext('2d');
        if (!canvasContext) return;
        canvas.value.width = canvasWrapper.value.offsetWidth;
        canvas.value.height = canvasWrapper.value.offsetHeight;
        for (let x = 0; x < canvasWrapper.value.offsetWidth * 0.75; x++) {
            const c = new Circle(canvasContext, canvasWrapper.value.offsetWidth, canvasWrapper.value.offsetHeight);
            circles.value.push(c);
        }
    }


    function onResize() {
        if (!canvasWrapper.value || !canvas.value) return;
        canvas.value.width = canvasWrapper.value.offsetWidth;
        canvas.value.height = canvasWrapper.value.offsetHeight;
    }

    function animate() {
        if (!canvas.value || !canvasWrapper.value) return;
        const canvasContext = canvas.value.getContext('2d');
        if (!canvasContext) return;
        canvasContext.clearRect(0, 0, canvasWrapper.value.offsetWidth, canvasWrapper.value.offsetHeight);
        circles.value.forEach((circle) => {
            circle.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
});


class Circle {
    private pos: { x: number; y: number };
    private alpha: number = 0;
    private scale: number = 0;
    private velocity: number = 0;

    constructor(private ctx: CanvasRenderingContext2D, private width: number, private height: number) {
        this.pos = { x: 0, y: 0 };
        this.init();
    }

    private init(): void {
        this.pos.x = Math.random() * this.width;
        this.pos.y = this.height + Math.random() * 100;
        this.alpha = 0.1 + Math.random() * 0.3;
        this.scale = 0.1 + Math.random() * 0.3;
        this.velocity = Math.random();
    }

    public draw(): void {
        if (this.alpha <= 0) {
            this.init();
        }
        this.pos.y -= this.velocity;
        this.alpha -= 0.0003;
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        this.ctx.fill();
    }
}


</script>