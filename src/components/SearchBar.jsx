import { useState } from 'react';

export default function SearchBar() {
  const [searchProduct, setSearchProduct] = useState('');

  function handleChange(e) {
    setSearchProduct(e.target.value);
  }

  return (
    <>
      <input
        type='text'
        placeholder='Search...'
        className='p-1 border-none bg-blue-100 rounded-md w-full'
        onChange={handleChange}
        value={searchProduct}
      />
    </>
  );
}
