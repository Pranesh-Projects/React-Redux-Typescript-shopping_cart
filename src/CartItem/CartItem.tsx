import Button from '@material-ui/core/Button';
// Types from 'App'
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (

  // Styles
  <Wrapper>
    <div>
      {/* title */}
      <h3>{item.title}</h3>

      {/* Individual Price  |  Total Price */}
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>

      {/* Price : Increment , Decrement */}
      <div className='buttons'>
        <Button size='small' disableElevation variant='contained' onClick={() => removeFromCart(item.id)}> - </Button>
        <p>{item.amount}</p>
        <Button size='small' disableElevation variant='contained' onClick={() => addToCart(item)}> + </Button>
      </div>

    </div>
    
    {/* image */}
    <img src={item.image} alt={item.title} />
  </Wrapper>

);

export default CartItem;
