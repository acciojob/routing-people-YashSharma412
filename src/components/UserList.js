import React from "react";
import { Link } from "react-router-dom";

const UserList = ({userData}) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            userData.map((user) => (
                <li>
                    <Link key={user.id} to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))
        }      
      </ul>
    </div>
  );
};

export default UserList;
