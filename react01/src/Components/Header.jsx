import Menu from "./Menu";

const Header = ({ title, name, email, age }) => {
  const menu = [
    {
      id: 1,
      link: "#",
      title: "menu1",
    },
    {
      id: 2,
      link: "#",
      title: "menu2",
    },
    {
      id: 3,
      link: "#",
      title: "menu3",
    },
  ];
  const handleReceiveData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Header</h1>
      <h2>{title}</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
      <Menu menu={menu} onReceiveData={handleReceiveData} />
    </div>
  );
};

export default Header;

//lenh tao fnc component: rfc
