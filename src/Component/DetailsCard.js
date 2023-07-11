import React, { useState } from "react";
import Details from "./ApiData";

const DetailsCard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const data = await Details();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          Get Data using API only just one click on Button
          <button className="click_btn" onClick={fetchData}>
            Get Users
          </button>
        </div>
      </div>
      {users.map((user) => (
          <div className="user-item" key={user.id}>
            <img src={user.avatar} alt={user.avatar} className="avatar" />
            <div className="right-section">
              <h4>ID: {user.id}</h4>
              <h4>
                {user.first_name} {user.last_name}
              </h4>

              <h4>{user.email}</h4>
            </div>
          </div>
      ))}
    </>
  );
};

export default DetailsCard;
