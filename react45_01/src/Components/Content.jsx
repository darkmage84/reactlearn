import React from "react";

const Content = () => {
  console.log("Rendering content");
  return <div>Học React hơi khó T_T</div>;
};

export default React.memo(Content);

// để tránh tình trạng render thằng cha mà thằng con cũng bị render theo

// Higher Order Component (HOC)
// bằng cách: export default React.memo()

// khác so với Hook useMemo()

// memo -> chỉ render khi props thay đổi
