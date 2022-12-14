export default async () => {
    const course = await useCourse()
    return course.value.chapters.at(0)?.lessons.at(0)
}
