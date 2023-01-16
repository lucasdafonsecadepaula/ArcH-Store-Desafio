import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ProductsContext } from '@/context/Products';
import { useCallback, useContext, useEffect, useState } from 'react';

export function Home() {
  const { products, resetProducts, defineProducts } =
    useContext(ProductsContext);
  const [totalProducts, setTotalProducts] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      if (totalProducts && products.length === totalProducts) return;
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${products.length}`
      );
      const data = await response.json();
      defineProducts(data.products);
      setTotalProducts(data.total);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, [products, totalProducts]);

  useEffect(() => {
    // Logica adicionada apenas pois foi criado um context para os produtos
    // e o mesmo precisa ser resetado quando a página for carregada
    // para que os produtos não sejam duplicados.
    // Em um caso real o context não seria criado, pois precisamos apenas desses dados em state 'local'.
    resetProducts();
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          getProducts();
        }
      },
      { threshold: 0.9 }
    );

    const anchorEl = document.querySelector('#anchor');
    if (anchorEl !== null) {
      intersectionObserver.observe(anchorEl);
    }

    return () => intersectionObserver.disconnect();
  }, [products]);

  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection isLoading={isLoading} products={products} />
      <div style={{ height: '50px' }} id="anchor" />
    </>
  );
}
