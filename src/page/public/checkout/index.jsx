import CustomCard from '../../../components/common/card_checkout';
import { Grid } from '@mui/material';
import ContainedButtons from '../../../components/common/button_voltar';
import OrderReview from '../../../components/common/checkout_revisão';
import PrimarySearchAppBar from '../../../components/common/navbar_ckeckout';
import { GetCart } from '../../../server/api';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Checkout() {
//   const cardCount = 3; // quantidade de cards na tela
  const dispatch = useDispatch();
  const { products, totalPrice, cartId } = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState([]); // Estado para armazenar dados do carrinho
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect para buscar o carrinho quando o cartId estiver disponível
  useEffect(() => {
    if (!cartId) return; // Sai do efeito se o cartId ainda não estiver disponível

    setLoading(true);
    GetCart(cartId)
      .then((dados) => {
        setCartData(dados.data.data); // Armazena os dados do carrinho
      })
      .catch((error) => {
        setError('Erro ao carregar o carrinho');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cartId]);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <PrimarySearchAppBar/>
            <Grid container spacing={0} sx={{ marginTop: '8rem', }}>
                {/* Grid para os cartões */}
                <Grid item xs={8.5} lg={6.6}>
                    <Grid container spacing={2} direction="column">
                        {cartData.map((_, index) => (
                            <Grid item key={index}>
                                <CustomCard />
                            </Grid>
                        ))}
                    </Grid>
                    <ContainedButtons/>
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