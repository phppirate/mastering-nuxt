<template>
    <div class="prose mb-12">
        <h1>
            <span class="font-medium">
                Course:
                <span class="font-bold">Mastering Nuxt 3</span>
            </span>
        </h1>
    </div>

    <div class="flex flex-grow flex-row justify-center">
        <div
            class="prose mr-4 flex min-w-[20ch] max-w-[30ch] flex-col rounded-md bg-white p-8"
        >
            <h3>Chapters</h3>
            <!-- All the lessons for the course listed here -->
            <div
                v-for="chapter in chapters"
                :key="chapter.slug"
                class="mb-4 flex flex-col space-y-1"
            >
                <h4>{{ chapter.title }}</h4>

                <NuxtLink
                    v-for="(lesson, index) in chapter.lessons"
                    :key="lesson.slug"
                    :to="lesson.path"
                    active-class="text-blue-500"
                    class="prose-sm flex space-x-1 py-1 font-normal no-underline"
                >
                    <span class="text-gray-500">{{ index + 1 }}.</span>
                    <span>{{ lesson.title }}</span>
                </NuxtLink>
            </div>
        </div>

        <div class="prose w-[65ch] rounded-md bg-white p-12">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup>
const { chapters } = useCourse()
</script>
