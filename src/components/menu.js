import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import './menu.css'
export default function Menu() {
  return (
    <>
        <nav>
            <ul>
                <li>
                   <Link to="/">
                        Home
                   </Link>
                </li>
                <li>
                   <Link to="/searchbooks">
                        Search
                   </Link>
                </li>
                
            </ul>
        </nav>
        <Outlet />
    </>
  );
}
