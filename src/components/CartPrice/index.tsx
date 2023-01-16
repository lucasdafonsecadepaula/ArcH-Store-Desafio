import { CartContext } from '@/context/Cart';
import { priceFormater } from '@/helpers/priceFormater';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Button } from '../Button';
import { Bullet, Container, Line } from './styles';

export function CartPrice() {
  const { cartItems, clearCart } = useContext(CartContext);

  const checkout = () => {
    toast.success('Compra concluída!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    clearCart();
  };

  const totalPrices = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.amount ?? 1);
  }, 0);

  return (
    <Container>
      <h4>Valor da Compra</h4>

      {cartItems.map((item) => (
        <Bullet key={item.id}>
          <span>
            {item.title} - {item.amount ?? 1}x
          </span>
          <span>{priceFormater(item.price * (item.amount ?? 1))}</span>
        </Bullet>
      ))}

      <Bullet className="line-through">
        <span>Frete</span>
        <span>{priceFormater(0)}</span>
      </Bullet>

      <Line />
      <Bullet>
        <span>Total</span>
        <span>{priceFormater(totalPrices)}</span>
      </Bullet>

      <Button onClick={checkout}>Finalizar Compra</Button>
    </Container>
  );
}
