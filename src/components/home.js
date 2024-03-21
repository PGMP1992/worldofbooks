<<<<<<< HEAD
import React from "react";
import Searchbooks from "./searchbooks";
import Menu from "./menu";

export default function hometemp() {
  return (
    
    <section>
      <Menu />
      <Searchbooks />
    </section>
        

    
=======
import React from 'react'
import Menu from './menu.js'
import Img from '../images/startimage.png'
export default function Home() {
  return (
    <div>
    <Menu />
      <img src={Img}
      alt='world of books'
      style={{width:1500}}
    ></img>
    </div>
>>>>>>> 50a35a57fee4ac7a3bbbdd8048b02a0293fa9c94
  )
}
