import useStore from '../store/store';

export default function CartCount() {
  const count = useStore((state) => state.cartCount);
  return (
    <span className='px-1 absolute -top-1.5 -right-3 bg-red-500 text-white rounded-full z-10 text-xs'>
      {count}
    </span>
  );
}
