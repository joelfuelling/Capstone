import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { useRef, useState } from 'react';

init("1YXZLLW_oC03DySRz");

export default function EmailJoel() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    emailjs.sendForm(
      'service_cz9mhew',
      'template_vr27xge',
      form.current,
      '1YXZLLW_oC03DySRz'
    )
      .then(
        (result) => {
          e.target.reset();
          setErrorMessage(null);
        },
        (error) => {
          setErrorMessage("Error sending email.");
        }
      );
  };

  return (
    <EmailForm>
      {errorMessage && <div className="error"><span className='red'>Error: </span>{errorMessage}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <label className="email-label">Name</label>
        <input className="email-input-field" type="text" name="user_name" placeholder="Who are you?" />
        <label className="email-label">Email</label>
        <input className="email-input-field" type="email" name="user_email" placeholder="What's your email?" />
        <label className="email-label">Message</label>
        <textarea name="message" placeholder="I can't wait to hear from you!" />
        <input className="email-input-field" type="submit" value="Send" />
      </form>
    </EmailForm>
  );
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
        }

        textarea {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100%;
            min-height: 200px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220,220,220);
            font-family: 'Crete Round', serif;
        }
    
        label {
            margin-top: .5rem;
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