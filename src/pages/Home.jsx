import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';

import axios from 'axios';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function useGetProducts() {
    const url = 'https://fakestoreapi.com/products';
    const response = await axios.get(url);
    const { data } = response;
    setProducts(data);
    setIsLoading(false);
  }

  const cachedFunction = useCallback(useGetProducts, [products]);

  useEffect(() => {
    cachedFunction();
  }, []);

  if (isLoading) {
    return (
      <div className='max-w-[80%] h-screen m-auto grid place-content-center'>
        <h1 className='text-6xl'>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div className='max-w-[80%] m-auto mt-4'>
        <SearchBar
          products={products}
          setProducts={setProducts}
          cachedFunction={cachedFunction}
        />
        <CategoryMenu
          cachedFunction={cachedFunction}
          products={products}
          setProducts={setProducts}
        />
        <ProductList products={products} />
      </div>
    </>
  );
}
