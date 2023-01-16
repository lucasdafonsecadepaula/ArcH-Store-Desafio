import { CartContext } from '@/context/Cart';
import { useContext } from 'react';
import { Button } from '../Button';
import { CartCard } from '../CartCard';
import { CartPrice } from '../CartPrice';
import {
  Box,
  Container,
  EmptyCartContainer,
  PriceWrapper,
  ProductsWrapper,
} from './styles';

export function CartSection() {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      {cartItems.length > 0 ? (
        <Box>
          <ProductsWrapper>
            {cartItems.map((product) => (
              <CartCard key={product.id} {...product} />
            ))}
          </ProductsWrapper>
          <PriceWrapper>
            <CartPrice />
          </PriceWrapper>
        </Box>
      ) : (
        <EmptyCartContainer>
          <h3>Carrinho de compras vazio</h3>
          <a href="/">
            <Button>Voltar para a tela inicial</Button>
          </a>
        </EmptyCartContainer>
      )}
    </Container>
  );
}
