import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import {init} from '@emailjs/browser'
import { useRef } from 'react'
init("1YXZLLW_oC03DySRz")



export default function EmailJoel() {
    const form = useRef()
    // Fire off the email on form submission (below)
    const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        'service_cz9mhew',
         'template_vr27xge',
          form.current,
           '1YXZLLW_oC03DySRz')
           // Or   iP-x7JrRU0NyiEMbLLCvS   ?
    .then(
        (result) => {
        console.log(result.text)
        console.log("Email sent")
        e.target.reset()
    },
     (error) => {
        console.log(error.text)
    }
    )
}
    return <EmailForm>
    <form ref={form} onSubmit={sendEmail}>
        <label className="email-label">Name</label>
        <input type="text" name="user_name" placeholder="Who are you?"/>
        <label className="email-label">Email</label>
        <input type="email" name="user_email" placeholder="What's your email?" />
        <label className="email-label">Message</label>
        <textarea name="message" placeholder="I can't wait to hear from you!"/>
        <input type="submit" value="Send"  />
    </form>
    </EmailForm>
}

const EmailForm = styled.div`
    width: 300px;
    
    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 125%;
        font-size: 12px;

        input {
            width: 100%;
            height: 35px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220,220,220);
            font-family: 'Crete Round', serif;
            

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
                background-color: white;
            }
        }

        textarea {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100%;
            min-height: 100%;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220,220,220);
            font-family: 'Crete Round', serif;

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
                font-family: 'Crete Round', serif;
            }
        }
    
        label {
            margin-top: 1rem;
        }

        input[type="submit"] {
            margin-top: 2rem;
            cursor: pointer;
            background: var(--chalk-yellow);
            color: white:
            border: none;
        }
    }
`;