import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Add from './components/Add'

function App() {


  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000000000),
      createdDate: event.target.createdDate.value,
      status: event.target.status.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      userName: event.target.userName.value,
      registrationNumber: event.target.registrationNumber.value,
    }
    setUsers((user) => {
      return [...users, user]
    });
  };





  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}
export default App;
