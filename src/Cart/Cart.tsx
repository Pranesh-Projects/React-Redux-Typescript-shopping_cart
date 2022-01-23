import CartItem from '../CartItem/CartItem';
// Types from 'App'
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

  const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (

    // Styles
    <Wrapper>
      {/* cart entry name */}
      <h2>Your Shopping Cart</h2>

      {/* check if items present - NO ITEMS */}
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}

      {/* display items from data */}
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}

      {/* display Total */}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>

  );
};

export default Cart;
