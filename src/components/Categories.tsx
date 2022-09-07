import React, { memo } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((cat, i) => {
          return (
            <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
