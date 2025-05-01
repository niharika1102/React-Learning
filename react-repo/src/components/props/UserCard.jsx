import React from "react";
import PropTypes from "prop-types";

// Goal: Build a UserCard component that uses all key props concepts you've learned.
// Create a UserCard component that takes the following props:
// name (string)
// age (number)
// skills (array of strings)
// isAdmin (boolean)
// children (JSX)

// Features to Implement:
// Destructure props inside the component.
// Conditionally render something based on isAdmin.
// Map through skills and render them.
// Use props.children to display additional content.
// Validate props using PropTypes.

const UserCard = ({ name, age, skills, isAdmin, children }) => {
  const getSkills = skills.map((s) => {
    return s + ", ";
  })
    return (
      <div className="flex justify-center flex-col border border-blue p-4 w-max">
        <h1 className="text-2xl mb-4">Hello, {name}</h1>
        <p>Age: {age}</p>
        <p>Skills: {getSkills}</p>
        <p>{isAdmin ? "Admin: ✅" : "Admin: ❌"}</p>
        {children}
      </div>
    );
};

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  skills: PropTypes.arrayOf(PropTypes.string),
  isAdmin: PropTypes.bool,
};

export default UserCard;
