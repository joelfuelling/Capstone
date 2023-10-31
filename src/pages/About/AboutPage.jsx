import EmailJoel from "../../components/EmailJoel/EmailForm"
import { useEffect } from "react"
export default function AboutPage({user}) {
    useEffect(() => {
        var APP_ID = "fqlu9nc1";
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        if (user) {
        window.Intercom('boot', {
          app_id: APP_ID,
          email: user.email,
          user_id: user.id,
          created_at: new Date(),
         });
        }
    }, [user])
    return (
        <>
            <div>
                <h3 className="about">OnCourse is a 1-stop course information logging platform to enter various course information including start and end dates, price, and a description to name a few. 1st, enter a 'New Course' above for whatever you're next course is. Then, the 'Courses List' will provide the user with a list of all courses they've created. All fields can be edited if needed and the course can be deleted.</h3>

                <h4>OnCourse is a MERN stack application created by Joel Fuelling during the General Assembly Software Engineering Immersive program.</h4>
            </div>
            <br />
            <h5>Contact <a href="https://joelfuelling.com/" target="_blank" className="joel" rel="noreferrer">Joel Fuelling</a> below.</h5>
            <br />
            <EmailJoel></EmailJoel>
            
        </>
    )
}