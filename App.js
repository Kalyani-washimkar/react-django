import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import './App.css';
import UserData from './components/UserData';

import axios from 'axios';

const App = () => {
  

  let data=[]
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/json").then(response => {
      setPersons(response.data)   
     data = (response.data) 
    })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <UserData 
      persons={persons}
      />
      <User 
      person={persons}
      />
      
    </div>
  );
}

export default App;