
export default function HomePage({user, setUser}) {
    console.log(user)
    return (
        <>
        <h1>Welcome to OnCourse! </h1>
        <div>
        <h4>OnCourse is a 1-stop course information logging platform for a user to enter varioius course information including start and end dates, price, and a description to name a few. 1st, enter a 'New Course' above for whatever you're next course is. Then, the 'Courses List' will provide the user with a list of all courses they've created as well as the details of the course. All fileds can be edited if needed and the course can be deleted.</h4>

        <h5>OnCourse is a full MERN stack application created by <a href="https://joelfuellingportfolio.netlify.app/" target="_blank" class="joel">Joel Fuelling</a> via the General Assembly Software Engingeering Immersive program.</h5>
        </div>
        </>
    )
}