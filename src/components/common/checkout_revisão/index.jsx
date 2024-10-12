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
        width: { xs: '133%', md: '495%', lg: '159%', xl: '150%', sm: '300%' },
        marginLeft: { lg: '21%', xl: '42%', md: '-140%', },
        marginTop: { lg: '-5%', xl: '-5%', sm: '-5%', xs: '-5%', md: '-20%' },
        display: 'flex',
        position: 'relative',
        padding: { xs: 1, md: 2 },
        '& > :not(style)': {
          backgroundColor: '#475569',
          padding: { xs: 2, md: 4 },
          width: '500%',
        },
      }}>
      <Paper elevation={3}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: { xs: '1rem', md: '1.5rem' },
            fontSize: { sm: '2rem', md: '1rem', lg: '2rem' },
          }}>
          Revisão do Pedido
        </Typography>
        <Box sx={{ marginLeft: { sm: '17%', lg: '1%', md: '0%' }, marginTop: { sm: '10%' } }}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: { xs: 1, md: 5, sm: 5 },
                }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYD9KS0ToW13xEUyGxqsjW4p7nnGs__TrBw&s"
                  alt="Produto"
                  style={{
                    width: '35%',
                    height: '75%',
                    marginRight: 16,
                  }}
                />

                <Box sx={{ flexGrow: 1, marginBottom: '10%' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontSize: { sm: '2rem', md: '1rem', lg: '1.3rem' },
                    }}>
                    Produto: Smartphone X
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontSize: { sm: '2rem', md: '1rem', lg: '1.3rem' },
                    }}>
                    Preço: R$ 3.000,00
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 1,
                      fontSize: { sm: '3rem', md: '1rem', lg: '1.3rem' },
                      marginBottom: '3%',
                    }}>
                    <IconButton
                      onClick={handleDecrement}
                      sx={{
                        color: 'white',
                        fontSize: { sm: '2rem', md: '1rem', lg: '1.3rem' },
                      }}>
                      <RemoveIcon fontSize="inherit" />
                    </IconButton>

                    <TextField
                      value={quantity}
                      inputProps={{
                        min: 1,
                        style: {
                          textAlign: 'center',
                          color: 'white',
                          fontSize: { sm: '2rem', md: '3rem', lg: '1.5rem' },
                        },
                      }}
                      sx={{
                        width: { sm: 60, md: 80 },
                        '& .MuiInputBase-input': { padding: '8px' },
                        '& .MuiOutlinedInput-root': { backgroundColor: '#334155' },
                      }}
                    />

                    <IconButton
                      onClick={handleIncrement}
                      sx={{
                        color: 'white',
                        fontSize: { sm: '2rem', md: '1rem', lg: '1.5rem' },
                      }}>
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'white',
              marginTop: { xs: 1, md: 2, sm: 5 },
              marginLeft: { sm: '-20%', lg: '-5%', md: '4%' },
              fontSize: { sm: '2rem', md: '1.5rem', lg: '1.5rem' },
            }}>
            TOTAL
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#475569',
              textAlign: 'center',
              padding: '0.5rem 0',
              marginTop: '0.5rem',
              width: { sm: '50%', lg: '70%' },
              fontSize: { sm: '2rem', md: '1rem', lg: '1.5rem' },
              marginLeft: { sm: '14%', lg: '12%', md: '25%' },
            }}>
            R$ {totalPrice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: 'black',
              color: '#FFFFFF',
              marginTop: '2rem',
              width: { sm: '50%', lg: '70%', xs: '100%' },
              fontSize: { sm: '1.5rem', md: '1rem', lg: '1.5rem', xs: '1.5rem' },
              marginLeft: { sm: '14%', lg: '12%', md: '25%' },
            }}>
            COMPRAR
          </Button>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '2rem',
              justifyContent: 'center',
              marginLeft: { sm: '-24%', lg: '-2%', md: '-2%' },
            }}>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                fontSize: { sm: '1.5rem', md: '0.9rem', lg: '1.1rem', xs: '1rem' },
              }}>
              CONFIRME SEUS DADOS DE ENTREGA
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
