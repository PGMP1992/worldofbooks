import React from 'react';
import './searchbooks.css';
import showbook from './showbook.js';
import bookcard from './bookcard.js';
import books from './books.json';
import Menu from './menu.js'

export default function searchbooks() {
  const allBooks=(values)=>{
    <div key={values.id}>
      <bookcard
      id={values.id}
      title={values.title}
      autor={values.autor}
      type={values.type}
      price={values.price}
      src={values.src}
      />

    </div>
}
  return (
    <div>
      <Menu />
      <h1>Search books</h1>
      {books.map(allBooks)}
    </div>
  );
  }
