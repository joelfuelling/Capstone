//! STRUCTURE BELOW IS A MUST KNOW :|
//! This files job is sending API requests to the EXPRESS server about users

// This is the base path of the Express route we'll define
import sendRequest from './send-request'
const BASE_URL = '/api/users' 


export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }

//? Compare the similarities and differences between the signUp (above) and login (below)
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`);
}