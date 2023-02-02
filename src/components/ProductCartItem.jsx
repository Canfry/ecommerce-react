import { useState } from 'react';
import { BiChevronLeftCircle } from 'react-icons/bi';
import { BiChevronRightCircle } from 'react-icons/bi';
import useStore from '../store/store';

export default function ProductCartItem({ product }) {
  const count = useStore((state) => state.cartCount);
  const products = useStore((state) => state.products);
  const clearProducts = useStore((state) => state.clearProducts);
  const addToCart = useStore((state) => state.addToCartCount);
  const removeFromCart = useStore((state) => state.deleteFromCartCount);

  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => prev + 1);
    addToCart();
  }

  function decrement() {
    setQuantity((prev) => prev - 1);
    removeFromCart();
  }

  return (
    <div className='max-w-[80%] m-auto flex items-center justify-between gap-8'>
      <div className='w-[200px] h-full flex-1'>
        <img src={product.image} alt='Product image' />
      </div>
      <div className='flex flex-col items-start justify-between gap-2 w-[50%] flex-2'>
        <h1 className='text-4xl'>{product.title}</h1>
        <p className='font-regular text-gray-500'>{product.description}</p>
      </div>

      <div className='flex flex-col items-start justify-center flex-1 mx-16'>
        <p>${product.price}</p>
        <p>{product.rating.rate} / 10</p>
        <p>{product.category}</p>
      </div>
      <div className='flex flex-col flex-1 items-center justify-center gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <button onClick={decrement}>
            <BiChevronLeftCircle className='w-[24px] h-[24px]' />
          </button>
          <span className='text-xl'>{quantity}</span>
          <button onClick={increment}>
            <BiChevronRightCircle className='w-[24px] h-[24px]' />
          </button>
        </div>
        <div>
          <button className='rounded-md bg-blue-600 text-white py-1 px-2'>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
