import React, { useId } from "react";

const Input = ({ title }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}`}>{title}</label>
      <input type="text" id={`${id}`} placeholder="Nhap id" />
    </div>
  );
};

export default Input;

// tự động cấp phát id riêng biệt
