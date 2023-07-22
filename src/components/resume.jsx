import Education from "./education";
import CourseWork from "./coursework";

export default function Resume() {
    return (
        <div className="resume">
            <Education/>
            <CourseWork type="developer"/>
        </div>
    )
}