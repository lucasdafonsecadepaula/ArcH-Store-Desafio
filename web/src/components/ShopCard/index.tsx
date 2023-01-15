import { priceFormater } from '@/helpers/priceFormater';
import { Product } from '@/models/Product';
import { AddToCardBtn, Container, ImageWrapper, InfoWrapper } from './styles';

export function ShopCard({ title, price, thumbnail }: Product) {
  return (
    <Container>
      <ImageWrapper>
        <img src={thumbnail} />
        {/* coração */}
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <span>{priceFormater(price)}</span>
        </div>
      </InfoWrapper>
      <AddToCardBtn>Adicionar ao carrinho</AddToCardBtn>
    </Container>
  );
}
