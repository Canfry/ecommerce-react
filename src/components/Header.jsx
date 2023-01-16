import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStore from '../store/store';
import CartCount from './CartCount';

export default function Header() {
  const user = useStore((state) => state.user);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  function userLogin() {
    login();
    setIsLogin(true);
  }

  function userLogout() {
    logout();
    setIsLogin(false);
  }

  return (
    <div className='w-full bg-blue-500 h-[5rem]'>
      <div className='max-w-[80%] m-auto flex items-center justify-between h-full text-blue-100'>
        <div>
          <Link to='/' className='font-bold text-2xl'>
            FryCommerce
          </Link>
        </div>
        <div>{isLogin ? <h3>Welcome: {user}</h3> : ''}</div>
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
            style={{ position: 'relative' }}
          >
            Cart
            <CartCount />
          </Link>
          <Link
            to='/contact'
            className={location.pathname === '/contact' ? 'text-blue-900' : ''}
          >
            Contact
          </Link>
          {isLogin ? (
            <button onClick={userLogout}>Logout</button>
          ) : (
            <button onClick={userLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
}
