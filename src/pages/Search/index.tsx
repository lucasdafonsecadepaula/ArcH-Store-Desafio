import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ProductsContext } from '@/context/Products';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Search() {
  const { products, defineProducts, resetProducts } =
    useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Logica adicionada apenas pois foi criado um context para os produtos
    // e o mesmo precisa ser resetado quando a página Home for carregada
    // para que os produtos não sejam duplicados.
    // Em um caso real o context não seria criado, pois precisamos apenas desses dados em state 'local'.
    resetProducts();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function getProducts() {
      const searchTerm = location.pathname.split('/')[2];
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        defineProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [location]);

  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection products={products} isLoading={isLoading} />
    </>
  );
}
