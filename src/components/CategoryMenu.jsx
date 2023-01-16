export default function CategoryMenu({
  cachedFunction,
  products,
  setProducts,
}) {
  const catArray = products.map((product) => product.category);
  const catList = new Set(catArray);
  const categoryList = Array.from(catList); // or categoryList = [...catList]

  // console.log(products);

  function clickAll() {
    cachedFunction();
  }

  function clickCategory(e) {
    const category = e.target.textContent;
    const filteredItems = products.filter(
      (product) => product.category === category
    );
    setProducts(filteredItems);
  }

  return (
    <div className='mb-8 mt-16'>
      <ul className='flex items-center gap-8 justify-center'>
        <li>Categories: </li>
        <button
          onClick={clickAll}
          className='bg-blue-200 cursor-pointer px-1 rounded-lg'
        >
          All
        </button>
        {categoryList.map((item) => (
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
