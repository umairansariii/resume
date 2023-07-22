export default function compareDates(a, b) {
    if (a.start > b.start) {
        return -1;
    } else if (a.start == b.start) {
        return 0;
    } else {
        return 1;
    }
}