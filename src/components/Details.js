import React from "react";

<<<<<<< HEAD

const Details = ({userData, userId}) => {
  // if(!user){
  //   return (<div>Loading...</div>);
  // }
  let MyUser = userData.filter(user => userId === user.id) 
  return (
    <div>
      <h1>User Details</h1>
      <p><b>Name: </b> {MyUser.name}</p>
      <p><b>Username: </b> {MyUser.username}</p>
      <p><b>Email: </b> {MyUser.email}</p>
      <p><b>Phone: </b> {MyUser.phone}</p>
      <p><b>Website: </b> {MyUser.website}</p>
=======
const Details = ({user}) => {
  return (
    <div>
      {
        user ? <div>
          <h1>User Details</h1>
            <p><b>Name: </b> {user.name}</p>
            <p><b>Username: </b> {user.username}</p>
            <p><b>Email: </b> {user.email}</p>
            <p><b>Phone: </b> {user.phone}</p>
            <p><b>Website: </b> {user.website}</p>
        </div> : <div>Loading...</div>
      }
>>>>>>> parent of db37ee2 (test4)
    </div>
  );
};

export default Details;
