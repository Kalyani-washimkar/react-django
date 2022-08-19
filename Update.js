
// import React, { useState } from 'react'
// import './UserData.css'
// import axios from 'axios'



// function Update ({persons}){
// return (
//     <div className="form">
//         <form>
        
//             <h1>Update!</h1>
//             <label htmlFor="name" name="name"  className='name'>Book Name: </label>
//             <input type="text" value={bookName}  onChange={(e)=>setBookName(e.target.value)}/>
//             <br />
//             <label htmlFor="author" name="author"  className='author'>Author: </label>
//             <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
//             <br />
//             <label htmlFor="quantity" name="quantity"  className='quantity'>Quantity: </label>
//             <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
//             <br />
//             <button className="btn btn-primary" onClick={handlePost}>Update Book</button>
          
//         </form>
//     </div>
//   )
// }





// const [data, setData] = useState('');
//     const [name, setName] = useState('');
//     const [author, setAuthor] = useState('');
//     const [quantity, setQuantity] = useState('');

//     console.log("persons",person)

//     const handleUpdate = (id) => {
//         console.log("edit",id);

            
//             axios.put(`http://127.0.0.1:8000/update/${id}`,data)
//             .then(res=>{
//                 setData(res.data);
//                 setName('');
//                 setAuthor('');
//                 setQuantity('');
//             })
        
//     }