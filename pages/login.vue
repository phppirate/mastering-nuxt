<template>
    <div class="prose h-9 w-full max-w-2xl">
        <h1>Log in to {{ title }}</h1>
        <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white">
            Log in with GitHub
        </button>
    </div>
</template>

<script lang="ts" setup>
const { title } = useCourse()
</script>
