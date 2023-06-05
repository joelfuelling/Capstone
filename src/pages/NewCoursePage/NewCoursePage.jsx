// <NewCourseForm> below is what takes place of the actual 'New' route since it's only job is to displahy a way to enter the new information, the form takes care of it.

import NewCourseForm from "../../components/NewCourseForm/NewCourseForm"
export default function NewCoursePage() {
    return (   
        <>
        {console.log("NewCoursePage")}
        <h1>New course </h1>
        <NewCourseForm></NewCourseForm>
        </>
    )
}