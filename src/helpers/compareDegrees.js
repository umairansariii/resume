export default function compareDegrees(a, b) {
    const degreeOrder = { "BS": 3, "MS": 2, "PhD": 1 };
    return degreeOrder[a.degree] - degreeOrder[b.degree];
}