import React, {useState} from 'react';
import './searchbooks.css';
import Bookcard from './bookcard.js';
import Books from './books.json';
import Menu from './menu.js'
import {BsSearch} from 'react-icons/bs'

export default function Searchbooks() {

  const [searchVal,setSearchVal]=useState("");
<<<<<<< HEAD
 function handleSearchClick(){
   Books.map(selectedBooks)
  }
 
  const allBooks=(values)=>{
=======
  function handleSearchClick(){
   Books.map(selectedBooks)
  }
 
  const selectedBooks=(values)=>{
    if (values.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.type.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.category.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.author.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
>>>>>>> 50a35a57fee4ac7a3bbbdd8048b02a0293fa9c94
    return(
      <div className='book' key={values.id}>
      <Bookcard
      id={values.id}
      title={values.title}
      author={values.author}
      type={values.type}
      category={values.category}
      price={values.price}
      src={values.src}
      />

    </div>
    );
    
<<<<<<< HEAD
}

const selectedBooks=(values)=>{
  

  if (values.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.type.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.category.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  || values.author.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
    {
  return(
    
    <div className='book' key={values.id}>
    <Bookcard
    id={values.id}
    title={values.title}
    author={values.author}
    type={values.type}
    category={values.category}
    price={values.price}
    src={values.src}
    />
 
  </div>
  );
    }
=======
>>>>>>> 50a35a57fee4ac7a3bbbdd8048b02a0293fa9c94
}


  
  return (
    
   <div>
      <div>
        <h2 style={{margin:10}}>Search books</h2>
        <input onChange={e=>setSearchVal(e.target.value)}></input>
        <BsSearch onClick={handleSearchClick}/>
          <div className='bookdisplay'>
          {Books.map(selectedBooks)}
          </div>
      </div>
    </div>
  );
  }
