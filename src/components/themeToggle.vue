<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const isDark = ref(true);
const belowFold = ref(false);

//if page has been scrolled more then 1 screen in height adjust boolean, using a listener
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        belowFold.value = true;
    } else {
        belowFold.value = false;
    }
});


watchEffect(() => {
    if (!isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

const updateDarkMode = () => {
    if (isDark.value) {
        localStorage.setItem('prefer-dark', 'false');
    } else {
        localStorage.setItem('prefer-dark', 'true');
    }
};

if (localStorage.getItem('prefer-dark') === 'true') {
    isDark.value = true;
} else if (localStorage.getItem('prefer-dark') === 'false') {
    isDark.value = false;
} else {
    //if no preference is set, check for system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark.value = false;
        localStorage.setItem('prefer-dark', 'false');
    } else {
        isDark.value = true;
    }
}
</script>

<template>
    <input v-model="isDark" @click="updateDarkMode" class="h-[var(--size)] w-[var(--size)] cursor-pointer appearance-none rounded-full outline-none transition-all duration-500 checked:scale-75" type="checkbox"
    :class="belowFold ? 'text-yellow-500' : 'text-slate-50'">
</template>


<style scoped>
input {
	--size: 2rem;
	box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
}
input:checked {
	--ray-size: calc(var(--size) * -0.4);
	--offset-orthogonal: calc(var(--size) * 0.65);
	--offset-diagonal: calc(var(--size) * 0.45);
	box-shadow: inset 0 0 0 var(--size),
                calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
                var(--offset-orthogonal) 0 0 var(--ray-size),
                0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
                0 var(--offset-orthogonal) 0 var(--ray-size),
                calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
                var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
                calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
                var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}

</style>
