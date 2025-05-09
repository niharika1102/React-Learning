import React from "react";

const ViewComments = ({ comments, onRemove }) => {
  return (
    <div>
      <ul>
        {comments?.map((c, index) => (
          <li key={index} className="border border-white w-max p-2 mb-4">
            {c} <button onClick={() => onRemove(index)} className="h-max w-max">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComments;
