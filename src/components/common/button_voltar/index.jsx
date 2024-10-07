import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ContainedButtons() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Button 
      variant="contained" 
      disableElevation 
      sx={{
        marginLeft: { xs: '30%', md: '56%', lg: '80%', xl: '91%',sm:'45%'}, // Margem esquerda em %
        width: { xs: '75%', md: '30%',lg:'15rem',sm:'60%', }, // Largura em %
        backgroundColor: 'black', 
        color: '#FFFFFF',
        display: 'block',
        marginTop: { xs: '5%', md: '0%' }, // Margem superior em %
        marginBottom:{xs:'5%'},
        fontSize:{sm:'1.5rem',lg:'1rem',xl:'1rem',md:'1rem'}

      }}
      onClick={handleBackToHome}
    >
      Voltar à compra
    </Button>
  );
}
