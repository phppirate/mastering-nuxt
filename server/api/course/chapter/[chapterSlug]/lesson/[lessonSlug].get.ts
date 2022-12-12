import { Chapter, Lesson, LessonWithPath } from '~/types/course'
import course from '~/server/courseData'

export default defineEventHandler((event): LessonWithPath => {
    const { chapterSlug, lessonSlug } = event.context.params

    const chapter: Maybe<Chapter> = course.chapters.find(
        (c) => c.slug === chapterSlug
    )

    if (!chapter) {
        throw createError({
            statusCode: 404,
            message: `Chapter ${chapterSlug} not found`,
        })
    }

    const lesson = chapter.lessons.find((l: Lesson) => l.slug === lessonSlug)

    if (!lesson) {
        throw createError({
            statusCode: 404,
            message: `Lesson ${lessonSlug} not found`,
        })
    }

    return {
        ...lesson,
        path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
    }
})
