<template>
    <div>
        <p class="mt-0 mb-1 font-bold uppercase text-slate-400">
            Lesson {{ chapter.number }} - {{ lesson.number }}
        </p>
        <h2 class="my-0">{{ lesson.title }}</h2>

        <div class="mt-2 mb-8 flex space-x-4">
            <NuxtLink
                v-if="lesson.sourceUrl"
                :to="lesson.sourceUrl"
                class="text-md font-normal text-gray-500"
            >
                Download Source Code
            </NuxtLink>
            <NuxtLink
                v-if="lesson.downloadUrl"
                :to="lesson.downloadUrl"
                class="text-md font-normal text-gray-500"
            >
                Download Video
            </NuxtLink>
        </div>

        <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />

        <p>{{ lesson.text }}</p>

        <LessonCompleteButton
            :modelValue="isLessonComplete"
            @update:modelValue="throwError"
        />
    </div>
</template>

<script setup>
const course = useCourse()
const route = useRoute()

definePageMeta({
    middleware: function ({ params }, from) {
        const course = useCourse()
        const chapter = course.chapters.find(
            (c) => c.slug === params.chapterSlug
        )

        if (!chapter) {
            return abortNavigation(
                createError({
                    statusCode: 404,
                    message: `Chapter ${params.chapterSlug} not found`,
                })
            )
        }

        const lesson = chapter.lessons.find((l) => l.slug === params.lessonSlug)

        if (!lesson) {
            return abortNavigation(
                createError({
                    statusCode: 404,
                    message: `Lesson ${params.lessonSlug} not found`,
                })
            )
        }
    },
})

if (route.params.lessonSlug === '3-typing-component-events') {
    console.log(route.params.paramthatdoesntexist.capitaliseIsNotAMethod())
}

const chapter = computed(() => {
    return course.chapters.find(
        (chapter) => chapter.slug === route.params.chapterSlug
    )
})

const lesson = computed(() => {
    return chapter.value.lessons.find(
        (lesson) => lesson.slug === route.params.lessonSlug
    )
})

const title = computed(() => {
    return `${lesson.value.title} - ${course.title}`
})

useHead({
    title,
})

const progress = useLocalStorage('progress', [])

const isLessonComplete = computed(() => {
    if (!progress.value[chapter.value.number - 1]) {
        return false
    }
    if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
        return false
    }

    return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
    if (!progress.value[chapter.value.number - 1]) {
        progress.value[chapter.value.number - 1] = []
    }
    progress.value[chapter.value.number - 1][lesson.value.number - 1] =
        !isLessonComplete.value
}

function throwError() {
    throw createError('Could Not Update')
}
</script>
