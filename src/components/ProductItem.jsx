import { Link } from 'react-router-dom';
import useStore from '../store/store';

export default function Productitem({ product, products }) {
  const addToCart = useStore((state) => state.addToCartCount);
  const addProducts = useStore((state) => state.addProduct);

  const { title, description, image, category, price, rating, id } = product;

  const shortTitle = title.slice(0, 20);

  function addProductsFn() {
    addToCart();
    addProducts({
      title: product.title,
      description: product.description,
      image: product.image,
      category: product.category,
      price: product.price,
      rating: product.rating,
      id: product.id,
    });
    console.log(product);
  }

  const shortDescription = description.slice(0, 80);
  return (
    <>
      <div className='border border-slate-400 px-4'>
        <Link
          to={`/products/${id}`}
          className='flex flex-col  w-full aspect-square'
        >
          <div
            className='w-full h-[80%] bg-no-repeat bg-center bg-contain'
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className='p-2'>
            <h1 className='font-bold'>{shortTitle}...</h1>
            <p className='text-slate-400'>{shortDescription}...</p>
          </div>
          <div className='p-2'>
            <p className='font-bold text-lg'>${price}</p>
            <p className='text-gray-500'>Rating: {rating.rate}</p>
          </div>
        </Link>
        <div className='flex items-center justify-between mt-4 mb-2 gap-4 text-[0.8rem]'>
          <button className='bg-blue-200 cursor-pointer px-1 rounded-lg'>
            {category}
          </button>
          <button
            onClick={addProductsFn}
            className='text-white bg-blue-600 py-1 px-2 rounded-md'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
