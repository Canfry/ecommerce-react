import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <div className='w-full grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2'>
      {/* <div className='flex flex-col'>
        <div className='w-full h-[50%]'>Image</div>
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div>
          <p>Rating</p>
          <p>Price</p>
        </div>
      </div> */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {/* <div className='flex flex-col'>
        <div className='w-full h-[50%]'>Image</div>
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div>
          <p>Rating</p>
          <p>Price</p>
        </div>
      </div> */}
    </div>
  );
}
