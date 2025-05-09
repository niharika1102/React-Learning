import React from "react";

const CommentForm = ({ onSubmit, onChange, comment }) => {
  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <textarea
          className="bg-white text-black p-1 h-[150px] w-[150px]"
          value={comment}
          onChange={onChange}
        />
        <button type="submit" className="w-max p-2 rounded-md border-pink-700 bg-pink-700 hover:bg-pink-500 hover:border-pink-500">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
