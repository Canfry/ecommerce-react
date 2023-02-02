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
      <div>{count}</div>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.description}</p>
        ))}
      </div>

      <button onClick={onClick}>Clear</button>
    </>
  );
}
