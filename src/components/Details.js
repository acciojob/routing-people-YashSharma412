import React from "react";


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
    </div>
  );
};

export default Details;
