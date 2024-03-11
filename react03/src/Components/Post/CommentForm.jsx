import React, { useState } from "react";

const CommentForm = ({ onComment }) => {
  const [form, setform] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(form);
    setform({ ...form, message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ten..."
          onChange={handleChange}
          value={form.name}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-control"
          placeholder="Noi dung ..."
          value={form.message}
          required
        ></textarea>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Binh luan
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
