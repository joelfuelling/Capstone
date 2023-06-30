import EmailJoel from "../../components/EmailJoel/EmailForm"

export default function AboutPage() {
    return (
        <>
            <div>
                <h3 className="about">OnCourse is a 1-stop course information logging platform for a user to enter various course information including start and end dates, price, and a description to name a few. 1st, enter a 'New Course' above for whatever you're next course is. Then, the 'Courses List' will provide the user with a list of all courses they've created. All fileds can be edited if needed and the course can be deleted.</h3>

                <h4>OnCourse is a full MERN stack application created by Joel Fuelling during the General Assembly Software Engingeering Immersive program.</h4>
            </div>
            <br />
            <h5>Contact <a href="https://joelfuelling.netlify.app/" target="_blank" className="joel" rel="noreferrer">Joel Fuelling</a> below.</h5>
            <br />
            <hr />
            <EmailJoel></EmailJoel>
        </>

    )
}