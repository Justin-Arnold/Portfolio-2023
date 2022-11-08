<template>
    <div class="fixed left-0 top-0 width-screen height-screen">
        <atom-particles />
    </div>
    <AtomPageFrame>
        <OrganismSiteHeader class="z-[999]"></OrganismSiteHeader>
        <NuxtPage />
    </AtomPageFrame>
</template>

<style>
body {
    overflow-x: hidden;
}
</style>