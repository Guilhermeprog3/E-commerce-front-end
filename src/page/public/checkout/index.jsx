import CustomCard from '../../../components/common/card_checkout';
import { Grid } from '@mui/material';
import ContainedButtons from '../../../components/common/button_voltar';
import OrderReview from '../../../components/common/checkout_revisão';
import PrimarySearchAppBar from '../../../components/common/navbar_ckeckout';
function Checkout() {
    const cardCount = 5; // quantidade de cards na tela

    return (
        <div>
            <PrimarySearchAppBar/>
            <Grid container spacing={0} sx={{ marginTop: '1rem', }}>
                {/* Grid para os cartões */}
                <Grid item xs={8.5}>
                    <Grid container spacing={0} direction="column">
                        {Array.from({ length: cardCount }).map((_, index) => (
                            <Grid item key={index}>
                                <CustomCard />
                            </Grid>
                        ))}
                    </Grid>
                    <ContainedButtons/>
                </Grid>
                
                <Grid item xs={9} sm={3.5} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <OrderReview />

                </Grid>
            </Grid>

            <div >
            
            </div>
        </div>
    );
}

export default Checkout;