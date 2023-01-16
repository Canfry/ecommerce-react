import useStore from '../store/store';

export default function Productitem({ product }) {
  const addToCart = useStore((state) => state.addToCartCount);

  const { title, description, image, category, price, rating } = product;

  const shortDescription = description.slice(0, 200);
  return (
    <div className='flex flex-col border border-slate-400 w-full aspect-square'>
      <div
        className='w-full h-[80%] bg-no-repeat bg-center bg-contain'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='p-2'>
        <h1 className='font-bold'>{title}</h1>
        <p className='text-slate-400'>{shortDescription}...</p>
      </div>
      <div className='p-2'>
        <p className='font-bold text-lg'>${price}</p>
        <p className='text-gray-500'>Rating: {rating.rate}</p>
        <div className='flex items-center justify-between mt-4 mb-2'>
          <button className='bg-blue-200 cursor-pointer px-1 rounded-lg'>
            {category}
          </button>
          <button
            onClick={addToCart}
            className='text-white bg-blue-600 py-1 px-2 rounded-md'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
