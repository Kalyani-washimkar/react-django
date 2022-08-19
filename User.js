import React, { useState, useEffect } from 'react'
import './User.css'
import axios from 'axios'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function User({ person }) {

    const handleDelete = (id) => {
        axios.get(`http://127.0.0.1:8000/delete/${id}`)
            .then(response => {
                this.setState({ status: response.status });
            })
    }

    
    const [n, setN] =useState ("");
    const [a, setA] =useState ("");
    const [q, setQ] =useState ("");
    // console.log("persons",person)
  
    const handlePop = (per) => {

           let id=per.pk
            console.log(n);
            console.log(a);
            console.log(q);
            let data =
                {
                    name: n,
                    author: a,
                    quantity: q
                }
            console.log(data,"data")
            axios.put(`http://127.0.0.1:8000/update/${id}`,data)
            .then((response) => {
               console.log(response)
   
            })
            // useEffect(() => {
            //     handlePop();
            //   }, [])
            
            
            // then(response => {
            //     setPersons(response.data)   
            //    data = (response.data) 
            // })
            // .then(res=>{
            //     setData(res.data);
            //     setName('');
            //     setAuthor('');
            //     setQuantity('');
            // })
        
    }
   

    return (
        <div>
            
                
            {person && person.map((persons) => (

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Quantity</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>

                            <tr>
                                <td>{persons.fields.name}</td>
                                <td>{persons.fields.author}</td>
                                <td>{persons.fields.quantity}</td>
                                <td><Popup trigger={<button> Edit </button>}
                                        position="right center">
                                        <h1>Update Book Here!</h1>
                                        
                                            <label htmlFor="name" name="name"  className='name'>Book Name: </label>
                                            <input type="text" placeholder={persons.fields.name} onChange={(e)=>setN(e.target.value)}/>
                                            <br />
                                            <label htmlFor="author" name="author"  className='author'>Author: </label>
                                            <input type="text" placeholder={persons.fields.author} onChange={(e)=>setA(e.target.value)}/>
                                            <br />
                                            <label htmlFor="quantity" className='quantity'>Quantity: </label>
                                            <input type="number" placeholder={persons.fields.quantity} onChange={(e)=>setQ(e.target.value)}/>
                                            <br />
                                            <button className="btn btn-primary" onClick={()=>handlePop(persons)}> Update</button>
                                    </Popup>
                                </td>

                                <td><button className="btn btn-primary" onClick={() => handleDelete(persons.pk)}>DELETE</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            ))}
        </div>
    )

}

export default User;
