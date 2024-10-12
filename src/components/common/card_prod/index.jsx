import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Rating, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard() {
  
  const rating = 4.5;

  return (
    <Card sx={{
      maxWidth: 345, 
      backgroundColor: '#000', 
      color: '#fff', 
    }}>
      <CardMedia
        component="img"
        height="180"
        image="https://img.freepik.com/fotos-premium/mao-segurando-o-smartphone-no-celular-com-fundo-preto-visto-de-perto-ai_985124-6290.jpg"
        alt="Smartphone"
      />

      <Box sx={{ backgroundColor: '#4B5563', padding: '2px', textAlign: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#000' }}>
          Smartphone Pro Max
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
          <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#000', }}>
            R$ 3.499,00
          </Typography>
          <Rating 
            name="rating" 
            value={rating} 
            precision={0.5} 
            readOnly
            sx={{ color: '#FFD700' }} 
          />
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: '#ccc' }} />

      <CardContent>
        <Typography variant="body2" color="inherit" component="p">
          Smartphone de última geração com tela AMOLED de 6.5", câmera de 108 MP e bateria de longa duração. 
          Capture cada momento com detalhes incríveis!
        </Typography>
      </CardContent>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 'bold', width: '50%' }}
          startIcon={<ShoppingCartIcon />}
        >
          COMPRA
        </Button>
      </Box>
    </Card>
  );
}

export default ProductCard;
