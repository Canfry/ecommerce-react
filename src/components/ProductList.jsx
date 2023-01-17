import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import CategoryMenu from './CategoryMenu';

export default function ProductList({ products, setProducts, cachedFunction }) {
  return (
    <>
      <SearchBar products={products} setProducts={setProducts} />
      <CategoryMenu
        cachedFunction={cachedFunction}
        products={products}
        setProducts={setProducts}
      />
      <div className='w-full grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
