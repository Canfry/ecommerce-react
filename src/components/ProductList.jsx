import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <div className='w-full grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
