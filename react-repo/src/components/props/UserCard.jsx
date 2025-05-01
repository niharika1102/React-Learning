import React from "react";

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

const UserCard = ({ name, age, isAdmin, skills, children }) => {
    const skill = skills.map((s) => {
        return s + ", ";
    })
  return (
    <div className="flex flex-col p-4 w-max border border-white">
          <h1 className="text-xl">Hello, {name}</h1>
          <p>Age: {age}</p>
          <p>Skills: {skill}</p>
          <p>{isAdmin ? "Admin: ✅" : "Admin: ❌"}</p>
          {children}
    </div>
  );
};

export default UserCard;
