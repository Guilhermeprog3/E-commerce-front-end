import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import PrimarySearchAppBar from '../../../components/common/navBar';
import Footer from '../../../components/common/footer';
import ProductCard from '../../../components/common/card_prod';
import PaginationRounded from '../../../components/common/pagination';
import FilterComponent from '../../../components/common/barra_lateral';
import ItemCountBar from '../../../components/common/barra_superior';

function Produto() {
  
  const products = Array(6).fill({});

  return (
    <div>
      <PrimarySearchAppBar />

      <Box sx={{marginTop:{lg:'7%',sm:'10%',xs:'20%'}}}>
        <ItemCountBar/>
      </Box>

      <Container
        sx={{
          marginLeft:{lg:'10.3%',xl:'20.5%',md:'-4%',sm:'2%',xs:'-2%'},
          marginTop: '2%',
          display: 'flex',
          width:{lg:'90%',md:'103%',xs:'20%'}
          
        }}
      >
        
        <Box sx={{ flex: 1, marginLeft:{lg:'-13%',md:'4%',xl:'-29%',xs:'-20%'},marginRight:{lg:'7%',sm:"75%",md:'5%'} }}>
          <FilterComponent />
        </Box>

        
        <Box sx={{ flex: 3 }}>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={25} sm={25} md={4} lg={4} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>

         
          <Box
            sx={{
              position: 'relative',
              marginTop:'5%',
              marginBottom:"5%",
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <PaginationRounded />
          </Box>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default Produto;
