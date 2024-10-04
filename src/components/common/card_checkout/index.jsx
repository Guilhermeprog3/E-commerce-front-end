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
    <Card sx={{ marginLeft:'5rem',display: 'flex',width:'63.5rem',marginTop:'1rem',backgroundColor:'#D9D9D954' }}>

      {/* Imagem do produto */}
      <CardMedia
        component="img"
        sx={{ width: 260, height: 134 }}
        image="https://s.zst.com.br/cms-assets/2023/06/celular-amoled-oled.webp"

      />
      
      {/* Conteúdo do card */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: 0.5 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>

          <Typography variant="body1" component="div">
            Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade.Experimente velocidades ultrarrápidas e uma interface intuitiva para fácil navegação.
          </Typography>

          
          <Button variant="contained" disableElevation sx={{marginTop:'1rem',backgroundColor:'white',height:'2rem',color:'black',width:'9rem'}}>
                R$ 3.000,00
          </Button>

        </CardContent>
      </Box>

      <IconButton aria-label="delete" sx={{ alignSelf: 'center' }}>

        <DeleteIcon sx={{fontSize:40,}}/>
        
      </IconButton>
    </Card>
  );
}
