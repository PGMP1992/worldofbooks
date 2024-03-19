import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Searchbooks from './components/searchbooks';
import Showbook from './components/showbook.js';
import './index.css';
import Home from './components/hometemp.js';
import Menu from './components/menu';
import reportWebVitals from './reportWebVitals';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route index element={<Home />} />
        <Route path="searchbooks" element={<Searchbooks />} />
        <Route path="showbook" element={<Showbook />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
