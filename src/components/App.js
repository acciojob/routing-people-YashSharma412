
import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
// 
import './../styles/App.css';
import users from "./users";
import Details from "./Details";
import UserList from "./UserList";

const App = () => {
  let [userData,setUserData] = useState(users)
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList userData = {userData}/>} />
        {
          userData.map((user)=>(
            <Route path={`users/${user.id}`} element={<Details userData={userData} key={user.id} userId = {user.id}/>} />

          ))
        }
      </Routes>
      
    </div>
  )
}

export default App
