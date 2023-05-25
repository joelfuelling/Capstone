// File name is UpperCase because it is a component.
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
//! PAY ATTENTION TO FILE PATHS (above)!
import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';


export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>  
      </> 
      :
      <AuthPage />
    }
  </main>
  );
}