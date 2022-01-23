import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (

  <Wrapper>
    {/* image */}
    <img src={item.image} alt={item.title} />

    <div>
      {/* title */}
      <h3>{item.title}</h3>
      {/* content */}
      <p>{item.description}</p>
      {/* price */}
      <h3>${item.price}</h3>
    </div>

    {/* Add to cart - button */}
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>

);

export default Item;
