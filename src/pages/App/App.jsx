// File name is UpperCase because it is a component.
import AuthPage from '../AuthPage/AuthPage';
import NewCoursePage from '../NewCoursePage/NewCoursePage';
import CourseIndexPage from '../CourseIndexPage/CourseIndexPage';
import CourseDetailPage from '../CourseDetailPage/CourseDetailPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../About/AboutPage';
//! PAY ATTENTION TO FILE PATHS (above)!
import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
// Add the following import
import { getUser } from '../../utilities/users-service';

// getUser is checking for an already existing token in the browser!
  //? This way, you don't have to constantly log back in (depending on how long it's been)

export default function App() {
  console.log(window.location)
  const [user, setUser] = useState(getUser())
  //top level componenet makes the most sense to include the user in becauase of the conditionsls below for whether there is a user or not.
 
  return (
    <main className="App">
      { user ?
      //! Add each function to the component (user, and setUser) for each that is needed. !//
       //! Nothin will "show" what you intend without the <Route /> added below.
            //! "<Link to="/about">About</Link>" from the NavBar component is what links up with the path="/about" below, which renders the <About Page/> when the "Link" is clicked. This is the simplicity of react-router-dom at work!
      <>
        <NavBar setUser={setUser} user={user}/>
        <Routes>
          <Route path="/" element ={<HomePage />} />
          <Route path="/about" element ={<AboutPage />} />
          <Route path="/courses" element={<CourseIndexPage />} />
          <Route path="/courses/new" element={<NewCoursePage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        </Routes>  
      </> 
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}