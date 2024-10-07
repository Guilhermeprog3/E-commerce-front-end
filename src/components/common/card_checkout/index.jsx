import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomCard() {
  return (
    <Card sx={{ 
      marginLeft: { xs: '10%', md: '1%', lg: '3%', sm: '35%', xl: '4%' }, 
      marginRight: { lg: '9%' },
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row', sm: 'column',lg:'row' }, 
      width: { xs: '120%', md: '85%', sm: '82%', lg: '108%', xl: '113%' }, 
      height: { xs: '28.5%', lg: '10%', md: '10%', sm: '20%' },
      marginTop: 0,
      backgroundColor: '#D9D9D954',
      justifyContent: 'space-between',
    }}>
      {/* Imagem do produto */}
      <CardMedia
        component="img"
        sx={{ 
          width: { xs: '100%', md: 200, sm: '100%',lg:280 }, 
          height: { xs: 200, md: 80,lg:140,sm:'100%' } 
        }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYD9KS0ToW13xEUyGxqsjW4p7nnGs__TrBw&s"
      />
      
      {/* Conteúdo do card */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: { xs: 0, md: '0.5%' } }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography 
            variant="body1" 
            component="div" 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { sm: '1.5rem', md: '0.8rem',lg:'1rem' }, // Aumenta a fonte em telas pequenas e médias
            }}
          >
            Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarrápidas e uma interface intuitiva para fácil navegação.
          </Typography>
          
          <Button 
            variant="contained" 
            disableElevation 
            sx={{ 
              marginTop:{lg:'2%',xl:'2%',sm:'10%',md:'5%',xs:'5%'}, 
              marginLeft:{lg:'2%',xl:'2%',sm:'15%',md:'5%',xs:'27%'}, 
              backgroundColor: 'white', 
              height: { md: '20%', lg: '30%', xl: '30%' }, 
              color: 'black', 
              width: { xs: '8rem', md: '8rem', lg: '8rem', xl: '15rem',sm:'15rem' },
              fontSize: { sm: '1.25rem', md: '1rem',lg:'1rem'} // Aumenta a fonte do botão em sm e md
            }}
          >
            R$ 3.000,00
          </Button>
        </CardContent>
      </Box>

      <IconButton 
        aria-label="delete" 
        sx={{ 
          alignSelf: { xs: 'center', md: 'center' }, 
          marginTop: { xs: '1%', md: 0 }
        }}
      >
        <DeleteIcon sx={{ fontSize: { sm: '2.5rem', md: '3rem', } }} /> {/* Aumenta o ícone em sm e md */}
      </IconButton>
    </Card>
  );
}
