//! STRUCTURE BELOW IS A MUST KNOW :|
//! This files job is sending API requests to the server about users

// This is the base path of the Express route we'll define
import sendRequest from './send-request'
const BASE_URL = '/api/courses' 


export async function coursesIndexRequest(){
    return sendRequest(BASE_URL)
}