import React, { useState } from 'react';
import { Box, Paper, Typography, Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function OrderReview() {
  const [quantity, setQuantity] = useState(1);
  
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const productPrice = 3000;
  const totalPrice = quantity * productPrice;

  return (
    <Box
      sx={{
        marginTop: '-37rem',
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': {
          backgroundColor: '#475569',
          m: 0.7,
          width: 350,
          padding: 2,
        },
      }}
    >
      <Paper elevation={3}>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          Revisão do Pedido
        </Typography>

        {Array(3).fill(0).map((_, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <img
              src="https://s.zst.com.br/cms-assets/2023/06/celular-amoled-oled.webp"
              alt="Produto"
              style={{ width: 80, height: 80, marginRight: 16 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ color: 'white' }}>Produto: Smartphone X</Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>Preço: R$ 3.000,00</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <IconButton onClick={handleDecrement} sx={{ color: 'white' }}>
                  <RemoveIcon />
                </IconButton>
                <TextField
                  value={quantity}
                  inputProps={{ min: 1, style: { textAlign: 'center', color: 'white' } }}
                  sx={{
                    width: 40,
                    '& .MuiInputBase-input': { padding: '0px 8px' },
                    '& .MuiOutlinedInput-root': { backgroundColor: '#334155' }
                  }}
                />
                <IconButton onClick={handleIncrement} sx={{ color: 'white' }}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}

        <Typography variant="h6" align="center" sx={{ color: 'white', marginTop: 2 }}>
          Total
        </Typography>
        <Typography variant="h4" align="center" sx={{width:'15rem',marginLeft:'2.5rem', color: 'white', fontWeight: 'bold', backgroundColor: 'white', color: '#475569' }}>
          R$ {totalPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" disableElevation sx={{width:'15rem',backgroundColor:'black',color:'#FFFFFF',marginTop:'2rem',marginLeft:'2.5rem',fontSize:'16px'}}>
              COMPRAR
        </Button>
        <Typography variant="h7" align="center" sx={{ color: 'white', marginTop:'2rem',marginLeft:3 }}>
          CONFIRME SEUS DADOS DE ENTREGA
        </Typography>
      </Paper>
    </Box>
  );
}
