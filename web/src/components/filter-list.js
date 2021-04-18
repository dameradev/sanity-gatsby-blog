import React from "react";

import  "./filter-list.module.css";

const FilterList = ({ categories }) => {
  return (
    <ul className='root'>
      <li className={'item'} key={"show-all"}>
        show all
      </li>
      {categories.map((category) => (
        <li className='item' key={category.node.title}>
          {category.node.title}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
