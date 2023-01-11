import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <div className='w-full bg-blue-500 h-[5rem]'>
      <div className='max-w-[80%] m-auto flex items-center justify-between h-full text-blue-100'>
        <div>
          <Link to='/' className='font-bold text-2xl'>
            FryCommerce
          </Link>
        </div>
        <div className='flex items-center justify-between gap-8'>
          <Link
            to='/'
            className={location.pathname === '/' ? 'text-blue-900' : ''}
          >
            Home
          </Link>
          <Link
            to='/about'
            className={location.pathname === '/about' ? 'text-blue-900' : ''}
          >
            About
          </Link>
          <Link
            to='/cart'
            className={location.pathname === '/cart' ? 'text-blue-900' : ''}
          >
            Cart
          </Link>
          <Link
            to='/contact'
            className={location.pathname === '/contact' ? 'text-blue-900' : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
