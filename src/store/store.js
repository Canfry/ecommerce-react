import { create } from 'zustand';

const useStore = create((set) => ({
  user: '',
  cartCount: 0,
  login: () => set(() => ({ user: 'Christophe Anfry' })),
  logout: () => set(() => ({ user: '' })),
  addToCartCount: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  clearCartCount: () => set(() => ({ cartCount: 0 })),
  setProducts: () =>
    set((state) => ({
      products: [...state.products],
    })),
  products: [],
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
  removeProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
  clearProducts: () =>
    set(() => ({
      products: [],
    })),
}));

export default useStore;
