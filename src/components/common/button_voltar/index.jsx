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
      sx={{marginLeft:'54.5rem', width:'14rem', backgroundColor:'black', color:'#FFFFFF'}}
      onClick={handleBackToHome}
    >
      Voltar a compra
    </Button>
  );
}
