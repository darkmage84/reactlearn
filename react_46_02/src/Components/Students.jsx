import React from "react";
// data
import students from "./db.json";
import { useState, useTransition } from "react";

const Students = () => {
  const [isPending, startTransition] = useTransition();
  //   console.log(students);
  const [keywords, setKeywords] = useState("");
  const handleSearch = (e) => {
    startTransition(() => {
      setKeywords(e.target.value);
    });
  };
  //   console.log(isPending);

  return (
    <div>
      <input type="search" placeholder="Search .." onChange={handleSearch} />
      <h3>Danh sách sinh viên: </h3>
      {
        //   isPending ? (
        //     <h4>Loading ... </h4>
        //   ) : (
        students.map(({ id, fullName }) => {
          // console.log("Loading ...");
          if (
            keywords.length &&
            fullName.toLowerCase().includes(keywords.toLowerCase())
          ) {
            return (
              <h4 key={id} style={{ background: "yellow", color: "red" }}>
                {fullName}
              </h4>
            );
          }
          return <h4 key={id}>{fullName}</h4>;
        })
        //   )
      }
    </div>
  );
};

export default Students;
