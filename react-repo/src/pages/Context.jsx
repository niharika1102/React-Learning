import React from "react";
import { UserContext } from "../components/react-context/UserContext";
import Dashboard from "../components/react-context/Dashboard";

//Create a User Profile by passign data via Context API.

const user = {
  name: "John Doe",
  age: 25,
  gender: "Male",
};

const Context = () => {
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
};

export default Context;
