import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function ProductForYou() {
  const products = [
    {
      id: 1,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação.',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },

    {
      id: 2,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação.',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 3,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação.',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 4,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação.',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
  ];

  return (
    <Box sx={{ padding: '40px' }}>
      <h2 style={{ color: '#4B5563', paddingBottom: '20px' }}>Produtos Que Combinam Com Você</h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Espaço entre os cards
          flexWrap: 'wrap', // Permite que os cards quebrem de linha em telas menores
          gap: '20px', // Espaçamento entre os cards
        }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 'calc(25% - 20px)', // Cada card ocupa 25% da largura com margem
              minWidth: '250px', // Define uma largura mínima para telas menores
              border: '1px solid #e0e0e0',
              height: '100%', // Garante que o card ocupe a altura total
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Distribui o conteúdo do card
            }}>
            <CardMedia
              sx={{
                width: '100%',
                height: 150,
                objectFit: 'contain',
                backgroundColor: '#8B96A5',
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {product.price}
                </Typography>
                <Typography
                  sx={{
                    color: 'gray',
                    textDecoration: 'line-through',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}>
                  {product.oldPrice}
                </Typography>
              </Box>
            </CardContent>

            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-16px',
                marginBottom: '10px',
              }}>
              <Button
                size="large"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  width: '70%',
                  padding: '16px',
                  borderRadius: '0px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}>
                <span style={{ fontSize: '12px' }}>Adicionar ao Carrinho</span>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
