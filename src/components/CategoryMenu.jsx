import { useState } from 'react';

export default function CategoryMenu({ products, setProducts }) {
  const [categoryList, setCategoryList] = useState([]);
  const catArray = products.map((product) => product.category);

  // console.log(catArray);

  const catList = new Set(catArray);
  // console.log(catList);
  const itemList = [...catList];

  console.log(itemList);

  function clickCategory(e) {
    itemList.forEach((it) => {
      const category = e.target.textContent;
      console.log(category);

      const filteredItems = products.filter(
        (product) => it.category === product.category
      );

      console.log(filteredItems);
      setProducts(filteredItems);
      setCategoryList([...categoryList, itemList]);
    });
  }

  return (
    <div className='mb-8 mt-16'>
      <ul className='flex items-center gap-8 justify-center'>
        <li>Categories: </li>
        {itemList.map((item) => (
          <li key={item}>
            <button
              value={item.category}
              onClick={clickCategory}
              className='bg-blue-200 cursor-pointer px-1 rounded-lg'
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
