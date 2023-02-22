import React from "react";
import ListCss from "./List.module.css";

function List({ ListProps }) {
  return (
    <>
      <ul className={ListCss.aaa}>
        {ListProps.map((i) => {
          return (
            <li key={i.id} className={ListCss.parent_list}>
              <h2>{i.car}</h2>
              <div>
                <img className={ListCss.img_car} src={i.url} alt="#" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
