<template>
    <NuxtLayout>
        <div class="prose">
            <h1>Dang</h1>
            <p>It looks like something broke.</p>
            <p>Sorry about that.</p>
            <p>
                <strong>{{ error.message }}</strong>
            </p>
            <p>
                <a class="hover:cursor-pointer" @click="handleError">
                    First Lesson
                </a>
            </p>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const error = useError()

function handleError() {
    clearError({
        redirect: `/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3`,
    })
}
</script>
