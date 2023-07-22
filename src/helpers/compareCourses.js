export default function compareCourses(a, b, categoryOrder) {
    const categoryAIndex = categoryOrder.indexOf(a.category[0]);
    const categoryBIndex = categoryOrder.indexOf(b.category[0]);
  
    if (categoryAIndex < categoryBIndex) {
        return -1;
    } else if (categoryAIndex > categoryBIndex) {
        return 1;
    } else {
        const secondaryCategoryAIndex = categoryOrder.indexOf(a.category[1]);
        const secondaryCategoryBIndex = categoryOrder.indexOf(b.category[1]);
        return secondaryCategoryAIndex - secondaryCategoryBIndex;
    }
}