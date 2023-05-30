// Responsible for input/out of user data, but NOT within the database.
import * as usersAPI from './users-api' 

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    // Persist the "token" using localStorage, which stores it in the browser.
    localStorage.setItem('token', token);
    return getUser();
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token')
    if (!token) return null
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove it from localStorage
        //! Currenly setup to expire in 24 hours... that's WAY too short. Make it a bit longer in your app.
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export async function checkToken(){
    // Just so that you don't forget how to use .then
    return usersAPI.checkToken()
        // checkToken returns a string, but let's make it a Date object for more flexibility
        .then(dateStr => new Date(dateStr));
}