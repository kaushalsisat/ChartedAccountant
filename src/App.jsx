import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountantDetailsPage from "./pages/AccountantDetailsPage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AccountantsList from "./components/AccountantsList";
import ContactUsPage from "./components/ContactUsPage";
import LoginForm from "./pages/Loginform";
import Footer from "./components/Footer";
import RegisterForm from "./pages/RegisterForm";
 

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/accountant/:id' element={<AccountantDetailsPage/>}/>
        <Route path='/alist' element={<AccountantsList/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactuspage' element={<ContactUsPage/>}/>
        <Route path='/loginform' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      <Footer/>
      </>
  );
};

export default App;
