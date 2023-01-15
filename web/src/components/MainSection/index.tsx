import { Product } from '@/models/Product';
import { useCallback, useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { ShopCard } from '../ShopCard';
import { Box, Container } from './styles';

export function MainSection() {
  const [totalProducts, setTotalProducts] = useState<null | number>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      if (totalProducts && products.length === totalProducts) return;
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${products.length}`
      );
      const data = await response.json();
      setProducts((prev) => [...prev, ...data.products]);
      setTotalProducts(data.total);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, [products, totalProducts]);

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

  console.log('products', products);

  return (
    <Container>
      <Box>
        {products.map((product) => (
          <ShopCard key={product.id} {...product} />
        ))}
        <div style={{ height: '50px' }} id="anchor" />
        {isLoading && <Loading />}
      </Box>
    </Container>
  );
}
