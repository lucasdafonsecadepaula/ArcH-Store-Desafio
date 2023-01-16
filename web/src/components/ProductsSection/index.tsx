import { Product } from '@/models/Product';
import { Loading } from '../Loading';
import { ProductCard } from '../ProductCard';
import { Box, Container } from './styles';

type ProductsSectionProps = {
  products: Product[];
  isLoading: boolean;
};

export function ProductsSection({ products, isLoading }: ProductsSectionProps) {
  return (
    <Container>
      <Box>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {isLoading && <Loading />}
      </Box>
    </Container>
  );
}
