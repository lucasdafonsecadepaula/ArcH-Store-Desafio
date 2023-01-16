/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from '@/models/Product';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  cartItems: [] as CartItemsProps[],
  addItemToCart: (_item: CartItemsProps) => {},
  removeItemToCart: (_itemId: number) => {},
  clearCart: () => {},
  increaseAmountOfItem: (_itemId: number) => {},
  decreaseAmountOfItem: (_itemId: number) => {},
  checkIfProductIsInCart: (_itemId: number) => false as boolean,
});

type CartProviderProps = { children: React.ReactNode };

export type CartItemsProps = Product & { amount?: number };

export function CartProvider({ children }: CartProviderProps) {
  const [cartItemsMap, setCartItemsMap] = useState<Map<number, CartItemsProps>>(
    () => {
      const localCartItems = localStorage.getItem('cartItems');
      const parsedCartItems = JSON.parse(
        localCartItems || '[]'
      ) as CartItemsProps[];
      return new Map(parsedCartItems.map((item) => [item.id, item]));
    }
  );
  const cartItems = [...cartItemsMap.values()];

  useEffect(() => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItemsMap.values()])
    );
  }, [cartItemsMap]);

  function addItemToCart(item: CartItemsProps) {
    const newState = new Map(cartItemsMap);
    newState.set(item.id, { ...item, amount: 1 });
    setCartItemsMap(newState);
  }

  function removeItemToCart(itemId: number) {
    const newState = new Map(cartItemsMap);
    newState.delete(itemId);
    setCartItemsMap(newState);
  }

  function increaseAmountOfItem(itemId: number) {
    const newState = new Map(cartItemsMap);
    const item = newState.get(itemId);
    if (!item) return;

    const amount = (item.amount || 0) + 1;
    newState.set(itemId, { ...item, amount });
    setCartItemsMap(newState);
  }

  function decreaseAmountOfItem(itemId: number) {
    const newState = new Map(cartItemsMap);
    const item = newState.get(itemId);
    if (!item) return;

    const amount = (item.amount || 0) - 1;
    if (amount <= 0) return;

    newState.set(itemId, { ...item, amount });
    setCartItemsMap(newState);
  }

  function checkIfProductIsInCart(itemId: number) {
    return cartItemsMap.has(itemId);
  }

  function clearCart() {
    setCartItemsMap(new Map());
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemToCart,
        clearCart,
        increaseAmountOfItem,
        decreaseAmountOfItem,
        checkIfProductIsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
