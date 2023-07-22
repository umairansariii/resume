import Data from "../private/education.json";
import formatDate from "../helpers/formatDateToMonthYear";
import compareDates from "../helpers/compareDates";

function EducationCard(props) {
    return (
        <div className="education-card">
            <h3>{props.data.title}</h3>
            <h4>{props.data.degree} in {props.data.department}</h4>
            <p>
                {
                    !props.data.end?
                    `${formatDate(new Date(props.data.start))} - Present`:
                    `Grad. ${formatDate(new Date(props.data.end))}`
                }
                {` | ${props.data.location}.`}
            </p>
            {
                props.data.type == "University"?
                <>
                {
                    !props.data.end?
                    <p>Cum. CGPA: {props.data.cgpa}/4.0</p>: null
                }
                <p>Major. GPA: {props.data.gpa}/4.0</p>
                </>: null
            }
        </div>
    )
}
export default function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            {
                Data
                .sort(compareDates)
                .map((e,idx) => <EducationCard data={e} key={idx}/>)
            }
        </section>
    )
}