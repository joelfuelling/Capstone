import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import {useState} from 'react'
export default function AuthPage({setUser}) {
    const [userWantsLogin, setUserWantsLogin] = useState(true)
    return (
        <>
        <h1>Auth Page</h1>
        { userWantsLogin ?
        <>
        {/* SUPER IMPORTANT that setUser gets passed to EACH */}
            <LoginForm setUser={setUser}/>
            <button onClick={(e)=>setUserWantsLogin(false)}>Sign Up</button>
        </>
        :
        <>
            <SignUpForm setUser={setUser} />
            <button onClick={(e)=>setUserWantsLogin(true)}>Already a user? Log in</button>
        </>
        }
        </>
    )
}