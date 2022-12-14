import course from '~/server/courseData'
import {
    Chapter,
    CourseMeta,
    Lesson,
    OutlineChapter,
    OutlineLesson,
} from '~/types/course'

export default defineEventHandler((): CourseMeta => {
    const outline: OutlineChapter[] = course.chapters.reduce(
        (prev: OutlineChapter[], next: Chapter) => {
            const lessons: OutlineLesson[] = next.lessons.map(
                (lesson: Lesson) => ({
                    title: lesson.title,
                    slug: lesson.slug,
                    number: lesson.number,
                    path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
                })
            )

            const chapter: OutlineChapter = {
                title: next.title,
                slug: next.slug,
                number: next.number,
                lessons,
            }

            return [...prev, chapter]
        },
        []
    )

    return {
        title: course.title,
        chapters: outline,
    }
})
