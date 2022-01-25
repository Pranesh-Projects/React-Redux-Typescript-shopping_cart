// Hooks
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
// Styles
import { Wrapper, StyledButton } from './App.styles';
// Material UI - core
import LinearProgress from '@material-ui/core/LinearProgress';   // loading progress
import Drawer from '@material-ui/core/Drawer';   // drawer from right side
import Badge from '@material-ui/core/Badge';   // Circle badge from 'iconButton'
import Grid from '@material-ui/core/Grid';   // Grid for item
// Material UI - icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

// Get content from url
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

// APP (main)
const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  // console.log(data);

  // Add items to cart
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart)
        return prev.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item);

      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else
          return [...ack, item];
      }, [] as CartItemType[])
    );
  };

  // Total items added to cart
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  // loading bar in the top
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>

      {/* Drawer from right */}
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>

      {/* Styles */}
      <StyledButton onClick={() => setCartOpen(true)}>
        {/* Circle Badge */}
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>  {/* error = 'red' color, primary = 'green' color */}
          <AddShoppingCartIcon />   {/* Shopping cart icon */}
        </Badge>
      </StyledButton>

      {/* grid around 'items' */}
      <Grid container spacing={3}>  {/* spacing between 3 columns of 'items' */}
        {data?.map(item => (
          // content in each item
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

    </Wrapper>
  );
};

export default App;
