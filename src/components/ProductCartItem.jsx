export default function ProductCartItem({ product }) {
  return (
    // <div className='max-w-[90%] m-auto flex items-center justify-center gap-8'>
    //   <div>
    //     <img src={product.image} alt='Product Image' />
    //   </div>
    //   <div className='flex flex-col items-start justify-between'>
    //     <div>{product.title}</div>
    //     <div>{product.description}</div>
    //   </div>
    //   <div className='flex flex-col items-start justify-center'>
    //     <div>{product.rating}</div>
    //     <div>{product.price}</div>
    //     <div>{product.category}</div>
    //   </div>
    // </div>
    <div className='max-w-[80%] m-auto flex items-center justify-between gap-8'>
      <div className='w-[200px] h-full'>
        <img src={product.image} alt='Product image' />
      </div>
      <div className='flex flex-col items-start justify-between gap-2 w-[50%]'>
        <h1 className='text-4xl'>{product.title}</h1>
        <p className='font-regular text-gray-500'>{product.description}</p>
      </div>
      <div>
        <p>{product.price}</p>
        <p>{product.rating.rate}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
}
