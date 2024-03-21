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
  )
}
