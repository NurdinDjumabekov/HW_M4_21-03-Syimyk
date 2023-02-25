import React from "react";
import listCss from "./List.module.css";

export const List = ({ postlist }) => {
  return (
    <div className={listCss.parentBlock}>
      <ul className={listCss.ul}>
        {postlist.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
