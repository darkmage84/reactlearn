import React from "react";

const Menu = (props) => {
  const { menu, onReceiveData } = props;
  const handleClick = () => {
    onReceiveData("Hello F88");
  };

  return (
    <>
      <nav className="menu">
        {menu?.length &&
          menu?.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
      </nav>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default Menu;
