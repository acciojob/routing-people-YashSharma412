import React from "react";

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
        </div> : <h1>Loading...</h1>
      }
    </div>
  );
};

export default Details;
