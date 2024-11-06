import CustomCard from '../../../components/common/card_checkout';
import { Grid } from '@mui/material';
import ContainedButtons from '../../../components/common/button_voltar';
import OrderReview from '../../../components/common/checkout_revisão';
import PrimarySearchAppBar from '../../../components/common/navbar_ckeckout';
import { GetCart } from '../../../server/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CircularIndeterminate from '../../../components/common/circularIndeterminate';

function Checkout() {
  //   const cardCount = 3; // quantidade de cards na tela
  const dispatch = useDispatch();
  const { cartId, products } = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState([]);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!cartId) return;

    setLoading(true);

    const response = GetCart(cartId)
    response.then((dados) => {
      setCartData(dados.data);
      setCartItemsData(dados.data.CartItems)
    })
      .catch((error) => {
        setError("Erro ao carregar o carrinho");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <CircularIndeterminate />
    );
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <PrimarySearchAppBar />
      <Grid container spacing={0} sx={{ marginTop: '8rem', }}>
        {/* Grid para os cartões */}
        <Grid item xs={8.5} lg={6.6}>
          <Grid container spacing={2} direction="column">
            {cartItemsData.map((item, index) => (
              <Grid item key={index}>
                <CustomCard product={item} />
              </Grid>
            ))}
          </Grid>
          <ContainedButtons />
        </Grid>

        <Grid item xs={9} sm={4} lg={3} md={1} sx={{ flexDirection: 'column' }}>
          <OrderReview />

        </Grid>
      </Grid>

      <div >

      </div>
    </div>
  );
}

export default Checkout;