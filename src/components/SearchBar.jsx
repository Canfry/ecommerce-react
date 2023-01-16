import { useState, useMemo } from 'react';

export default function SearchBar({ products, setProducts, cachedFunction }) {
  const [searchProduct, setSearchProduct] = useState('');

  function handleChange(e) {
    if (e.target.value === '') {
      cachedFunction();
    }
    setSearchProduct(e.target.value);
    setProducts(filteredProducts);
  }

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        (
          product.title.toLowerCase() || product.description.toLowerCase()
        ).includes(searchProduct.toLowerCase())
      ),
    [products, searchProduct]
  );

  console.log(filteredProducts);

  return (
    <>
      <div className='max-w-[30%] m-auto mt-8 mb-8'>
        <input
          type='text'
          placeholder='Search...'
          className='p-1 border-none bg-blue-100 rounded-md w-full'
          onChange={handleChange}
          value={searchProduct}
        />
      </div>
    </>
  );
}
