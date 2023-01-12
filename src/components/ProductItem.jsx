export default function Productitem({ product }) {
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
        <p>${price}</p>
        <p className='text-right'>Rating: {rating.rate}</p>
        <button className='bg-blue-200 cursor-pointer px-1 rounded-lg'>
          {category}
        </button>
      </div>
    </div>
  );
}
