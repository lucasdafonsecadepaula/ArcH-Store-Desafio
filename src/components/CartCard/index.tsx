import { CartContext } from '@/context/Cart';
import { priceFormater } from '@/helpers/priceFormater';
import { Product } from '@/models/Product';
import { useContext } from 'react';
import {
  Container,
  EditBtn,
  EditorWrapper,
  ImageWrapper,
  InfoWrapper,
} from './styles';

export function CartCard(productData: Product) {
  const { id, title, description, price, thumbnail, amount } = productData;
  const { increaseAmountOfItem, decreaseAmountOfItem, removeItemToCart } =
    useContext(CartContext);

  return (
    <Container>
      <ImageWrapper>
        <img src={thumbnail} />
      </ImageWrapper>
      <InfoWrapper>
        <div className="description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="price">
          <span>{priceFormater(price)}</span>
        </div>
      </InfoWrapper>
      <EditorWrapper>
        <p>Quantidade:</p>
        <span>
          <EditBtn
            isDisabled={amount === 1}
            onClick={() => decreaseAmountOfItem(id)}
          >
            -
          </EditBtn>
          <span>{amount ?? '1'}</span>
          <EditBtn onClick={() => increaseAmountOfItem(id)}>+</EditBtn>
        </span>
        <div onClick={() => removeItemToCart(id)}>
          <p>Remover</p>
        </div>
      </EditorWrapper>
    </Container>
  );
}
