
import React, { useState } from 'react'
import './UserData.css'
import axios from 'axios'



function UserData ({persons}){

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePost = async() =>{
    const data ={
      name: bookName,
      author: author,
      quantity: quantity
    }
    // if(data==)
   axios.post("http://127.0.0.1:8000/add/", data)

    }

    
    
  return (
    <div className="form">
        <form>
        
            <h1>Add Book Here!</h1>
            <label htmlFor="name" name="name"  className='name'>Book Name: </label>
            <input type="text" value={bookName}  onChange={(e)=>setBookName(e.target.value)}/>
            <br />
            <label htmlFor="author" name="author"  className='author'>Author: </label>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <br />
            <label htmlFor="quantity" name="quantity"  className='quantity'>Quantity: </label>
            <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <br />
            <button className="btn btn-primary" onClick={handlePost}> Add Book</button>
          
        </form>
    </div>
  )
}

export default UserData;