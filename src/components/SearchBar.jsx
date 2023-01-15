import { useState } from 'react';

export default function SearchBar() {
  const [searchProduct, setSearchProduct] = useState('');

  function handleChange(e) {
    setSearchProduct(e.target.value);
  }

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
