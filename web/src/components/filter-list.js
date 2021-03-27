import React from "react";

import * as styles from "./filter-list.module.css";

const FilterList = ({ categories }) => {
  return (
    <ul className={styles.root}>
      <li className={styles.item} key={"show-all"}>
        show all
      </li>
      {categories.map((category) => (
        <li className={styles.item} key={category.node.title}>
          {category.node.title}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
