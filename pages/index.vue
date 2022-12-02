<template>
    <NuxtLink :href="firstLesson.path" class="font-medium underline">
        Go to first lesson
    </NuxtLink>
</template>

<script lang="ts" setup>
const firstLesson = useFirstLesson()
</script>
