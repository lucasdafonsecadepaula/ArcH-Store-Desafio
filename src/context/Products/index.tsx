/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from '@/models/Product';
import { createContext, useState } from 'react';

export const ProductsContext = createContext({
  products: [] as Product[],
  defineProducts: (products: Product[]) => {},
  resetProducts: () => {},
  addProduct: (product: Product) => {},
  removeProduct: (product: Product) => {},
  editProduct: (product: Product) => {},
});

type ProductsProviderProps = { children: React.ReactNode };

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const resetProducts = () => {
    setProducts([]);
  };

  const defineProducts = (products: Product[]) => {
    setProducts((prev) => [...prev, ...products]);
  };

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product: Product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const editProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        defineProducts,
        resetProducts,
        addProduct,
        removeProduct,
        editProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
