import { useState, useEffect } from "react";

import Data from "../private/coursework.json";
import compareCourses from "../helpers/compareCourses";

function CourseWorkCard(props) {
    return (
        <p><a href={props.data.url} target="blank">{props.data.title}</a></p>
    )
}
export default function CourseWork(props) {
    const [courses, setCourses] = useState(null);
    const developerOrder = ["CS", "MTH", "MGT"];
    const designerOrder = ["MGT", "CS"];
    const marketingOrder = ["MGT", "EN"];

    useEffect(() => {
        updateType(props.type);
    },[]);
    const updateType = (type) => {
        switch (type) {
            case "developer":
                setCourses(
                    Data
                    .filter(e => developerOrder.includes(...e.category))
                    .sort((a, b) => compareCourses(a, b, developerOrder))
                )
                break;
            case "designer":
                setCourses(
                    Data
                    .filter(e => designerOrder.includes(...e.category))
                    .sort((a, b) => compareCourses(a, b, designerOrder))
                )
                break;
            case "marketing":
                setCourses(
                    Data
                    .filter(e => marketingOrder.includes(...e.category))
                    .sort((a, b) => compareCourses(a, b, marketingOrder))
                )
                break;
            default:
                break;
        }
    };
    return (
        <section className="coursework">
            <h2>CourseWork</h2>
            <h3>Graduate</h3>
            {
                courses && courses
                .filter(e => e.level == "Graduate")
                .map((e,idx) => <CourseWorkCard data={e} key={idx}/>)
            }
            <h3>Undergraduate</h3>
            {
                courses && courses
                .filter(e => e.level == "Undergraduate")
                .map((e,idx) => <CourseWorkCard data={e} key={idx}/>)
            }
        </section>
    )
}