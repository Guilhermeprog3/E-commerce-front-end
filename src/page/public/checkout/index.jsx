import CustomCard from '../../../components/common/card_checkout';
import { Grid } from '@mui/material';
import ContainedButtons from '../../../components/common/button_voltar';
import OrderReview from '../../../components/common/checkout_revisão';
import PrimarySearchAppBar from '../../../components/common/navbar_ckeckout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearCart, selectCartProducts } from '../../../redux/cart/slice';

function Checkout() {
  const [cartItemsData, setCartItemsData] = useState([]);
  const [error, setError] = useState(null);
  const cartProducts = useSelector(selectCartProducts);
  const products = cartProducts.payload.cart.products

  useEffect(() => {
    try {
      setCartItemsData(products);
    } catch (error) {
      console.error("Erro ao analisar os dados do carrinho:", error);
      setError("Erro ao carregar os dados do carrinho.");
    }
  }, [cartProducts]);


  return (
    <div>
      <PrimarySearchAppBar />
      <Grid container spacing={0} sx={{ marginTop: '8rem' }}>
        <Grid item xs={8.5} lg={6.6}>
          <Grid container spacing={2} direction="column">
            {cartItemsData.map((item, index) => (
              <Grid item key={item.productId}>
                <CustomCard product={item} />
              </Grid>
            ))}
          </Grid>
          <ContainedButtons />
        </Grid>

        <Grid item xs={9} sm={4} lg={3} md={1} sx={{ flexDirection: 'column' }}>
          <OrderReview arrayProduct={cartItemsData} productsStore={products} />
        </Grid>
      </Grid>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Checkout;