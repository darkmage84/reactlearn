export const color = (Component) => {
  const color = "#" + Math.random().toString(16).slice(-6);
  // console.log(color);

  // kế thừa Logic
  return function (props) {
    return (
      <div className="color" style={{ color }}>
        <Component {...props} color={color} />
      </div>
    );
  };
};

export default color;

/*
- Tạo ra 1 Component mới bên trong 1 hàm khác

- Hàm color -> Hàm bọc (Cấp cao hơn)
*/
