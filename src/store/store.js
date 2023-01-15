import { create } from 'zustand';

const useStore = create((set) => ({
  user: '',
  cartCount: 0,
  login: () => set(() => ({ user: 'Christophe Anfry' })),
  logout: () => set(() => ({ user: '' })),
  addToCartCount: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));

export default useStore;
