import React, { useState } from "react";
import CommentForm from "../components/event-handling/CommentForm";
import ViewComments from "../components/event-handling/ViewComments";

// 🛠️ Task: Create an Interactive Comment Box
// You're building a simple comment section.

// 🔧 Requirements:
// A form with:

// A <textarea> to type a comment

// A "Submit" button

// When the form is submitted:

// Prevent the default page reload

// Add the comment below the form

// Clear the input

// Each comment:

// Should be inside a card-like <div>

// Clicking the comment shows an alert: “Comment clicked”

// There should be a small “X” button inside each comment card to delete it

// When clicking the "X", only delete the comment — don’t show the alert

// Use stopPropagation() to prevent bubbling

// ✨ Bonus:
// Show total number of comments at the top.

// Style it with Tailwind for bonus points.

const EventHandling = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const handleComment = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, text]);
    setText("");
  };

  const handleRemoveComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-row gap-8">
      <CommentForm
        onSubmit={handleSubmit}
        comment={text}
        onChange={handleComment}
      />
      <ViewComments comments={comments} onRemove={handleRemoveComment} />
    </div>
  );
};

export default EventHandling;
