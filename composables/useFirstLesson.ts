export default () => {
    const { chapters } = useCourse()
    return chapters.at(0)?.lessons.at(0)
}
