import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? 'active' : ''}>
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
