import { useParams } from 'react-router-dom';

export default function Item() {
  const { productId } = useParams();
  const product = products.find((product) => productId === product.id);
  return <div>{product}</div>;
}
