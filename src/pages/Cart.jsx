import ProductCartItem from '../components/ProductCartItem';
import useStore from '../store/store';

export default function Cart() {
  const count = useStore((state) => state.cartCount);
  const clearCart = useStore((state) => state.clearCartCount);
  const products = useStore((state) => state.products);
  const clearProducts = useStore((state) => state.clearProducts);

  function onClick() {
    clearCart();
    clearProducts();
  }

  return (
    <>
      <div className='max-w-[80%] m-auto flexflex-col items-end justify-center my-8 text-right'>
        <p className='mb-2'>Total items : {count}</p>
        <button
          onClick={onClick}
          className='rounded-md bg-blue-600 text-white py-1 px-2'
          disabled={products.length === 0 ? true : false}
        >
          Clear Cart
        </button>
      </div>
      <div>
        {products.map((product) => (
          <ProductCartItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
