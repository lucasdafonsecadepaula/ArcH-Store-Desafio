import { CartContext } from '@/context/Cart';
import { UserContext } from '@/context/User';
import { priceFormater } from '@/helpers/priceFormater';
import { Product } from '@/models/Product';
import { EditAlt as EditIcon } from '@styled-icons/boxicons-regular';
import { useContext, useState } from 'react';
import { Button } from '../Button';
import { EditProduct } from '../EditProduct';
import { Modal } from '../Modal';
import { Container, ImageWrapper, InfoWrapper } from './styles';

export function ProductCard(productData: Product) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userRole } = useContext(UserContext);
  const { id, title, price, thumbnail } = productData;
  const { addItemToCart, checkIfProductIsInCart } = useContext(CartContext);
  const isProductInCart = checkIfProductIsInCart(id);
  const isAdm = userRole === 'adm';

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal onRequestClose={closeModal}>
          <EditProduct {...productData} closeModal={closeModal} />
        </Modal>
      )}

      <ImageWrapper>
        <img src={thumbnail} />
        {isAdm && (
          <span title="Editar" onClick={() => setIsModalOpen(true)}>
            <EditIcon />
          </span>
        )}
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <span>{priceFormater(price)}</span>
        </div>
      </InfoWrapper>
      <Button
        disabled={isProductInCart}
        onClick={() => addItemToCart(productData)}
      >
        {isProductInCart ? 'Produto no carrinho' : 'Adicionar ao carrinho'}
      </Button>
    </Container>
  );
}
