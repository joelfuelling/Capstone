//! STRUCTURE BELOW IS A MUST KNOW :|
//! This files job is sending API requests to the server about users

// This is the base path of the Express route we'll define
import sendRequest from './send-request'
const BASE_URL = '/api/courses' 


export async function coursesIndexRequest(){
    return sendRequest(BASE_URL)
}

export async function createCourseRequest(courseData){
    console.log(courseData)
    return sendRequest(BASE_URL, "POST", courseData)
}

export async function getCourseRequest(courseId){
    return sendRequest(`${BASE_URL}/${courseId}`)
}

export async function deleteCourseRequest(courseId){
    return sendRequest(`${BASE_URL}/${courseId}`, "DELETE")
}

export async function updateCourseRequest(courseId, updatedCourse){
    return sendRequest(`${BASE_URL}/${courseId}`, "PUT", updatedCourse)
}