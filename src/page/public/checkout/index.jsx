import CustomCard from '../../../components/card_checkout'
import { Grid } from '@mui/material';
import ContainedButtons from '../../../components/button_voltar';
import OrderReview from '../../../components/checkout_revisao';
// import OrderReview from '../../../components/mini_card_checkout'



function Checkout() {
    const cardCount = 3; // quantidade de cards na tela

    return (
        <Grid container spacing={0} sx={{ marginTop: '1rem',marginLeft:'3rem'}}>
            <Grid item xs={7}>
                <Grid container spacing={0} direction="column">
                    {Array.from({ length: cardCount }).map((_, index) => (
                        <Grid item xs={10} key={index}>
                            <CustomCard />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

                <ContainedButtons />
                <OrderReview/>
                {/* <SimplePaper />  */}
        </Grid>
    );
}

export default Checkout;
