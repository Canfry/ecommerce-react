export default function ProductCartItem({ product }) {
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
        <div>
          <span>left</span>
          <span>1</span>
          <span>right</span>
        </div>
        <div>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
