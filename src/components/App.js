
import React from "react";
import { Routes, Route } from "react-router-dom";
// 
import './../styles/App.css';
import users from "./users";
import Details from "./Details";
import UserList from "./UserList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        {/* <Route path="/1" element={<Details/>} /> */}
        {
          users.map((user)=>(
            <Route path={`users/${user.id}`} element={<Details user = {user}/>} />

          ))
        }
      </Routes>
      
    </div>
  )
}

export default App
