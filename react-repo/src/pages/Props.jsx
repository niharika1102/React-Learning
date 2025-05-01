import React from "react";
import UserCard from "../components/props/UserCard";

const Props = () => {
  return (
    <div>
      <UserCard
        name="John Doe"
        age={24}
        skills={["Java", "Python", "React"]}
        isAdmin={false}
      >
        <div className="flex justify-center">
          <button className="border border-pink-800 bg-pink-800 font-medium m-2 p-2 w-auto rounded-md hover:border-pink-400 hover:bg-pink-400">
            Click Me!
          </button>
        </div>
      </UserCard>
    </div>
  );
};

export default Props;
