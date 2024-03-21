<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Books from './components/searchbooks';
import Showbook from './components/showbook.js';
import Showcart from './components/showcart.js';
import './index.css';
import Home from './components/home.js';
import Menu from './components/menu';
import reportWebVitals from './reportWebVitals';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Outlet />}/>
        <Route path="/" element={<Menu />} />
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="showbook" element={<Showbook />} />
        <Route path="showcart" element={<Showcart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 50a35a57fee4ac7a3bbbdd8048b02a0293fa9c94



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
