// File name is UpperCase because it is a component.
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
//! PAY ATTENTION TO FILE PATHS (above)!
import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
// Add the following import
import { getUser } from '../../utilities/users-service';
// getUser is checking for an already existing token in the browser!
  //? This way, you don't have to constantly log back in (depending on how long it's been)

export default function App() {
  
  const [user, setUser] = useState(getUser())
  //top level componenet makes the most sense to include the user in becauase of the conditionsls below for whether there is a user or not.
  return (
    <main className="App">
      { user ?
      //! SUPER IMPORTANT that you add each function to the component (user, and setUser) for each that is needed. !//
      <>
        <NavBar setUser={setUser} user={user}/>
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>  
      </> 
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}