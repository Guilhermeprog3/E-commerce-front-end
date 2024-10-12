import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel, Link, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const P_Login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f0f0f0",
        p: 4,
        border: "1px solid #0078D4",
        maxWidth: {
          xs: 555,
          sm: 817,
          md: 600,
          lg: 600,
          xl: 600
        },
        mx: "auto",
        marginTop: '8%',
        minHeight: {
          xs: '62vh',
          sm: '62vh',
          md: 'auto',
        },
      }}
    >
        <Box sx={{marginTop:{xs:'10%',md:'0%'}}}>

      <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom>
        Bem-vindo de volta!
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center' }} gutterBottom>
        Verifique seu e-mail para confirmar.
      </Typography>

      <TextField 
        label="Seu Email" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        InputProps={{ sx: { fontSize: '1.2rem' } }}
      />

      <TextField 
        label="Sua senha" 
        type={showPassword ? 'text' : 'password'}
        variant="outlined" 
        fullWidth 
        margin="normal" 
        InputProps={{
          sx: { fontSize: '1.2rem' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword} 
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <FormControlLabel
        control={<Checkbox sx={{ transform: 'scale(1.5)', marginTop: '0' }} />}
        label="Autenticação de segurança: confirme que você não é um robô."
        sx={{ mt: 2, mb: 2, '& .MuiFormControlLabel-label': { fontSize: '1rem', marginTop: '0' } }}
      />

      <Button 
        variant="contained" 
        fullWidth 
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '12px 0',
          fontSize: '1.2rem',
          width: '50%',
          marginLeft: '25%',
          '&:hover': {
            backgroundColor: '#4B5563', 
          }
        }}
      >
        login
      </Button>

      <Typography variant="body1" color="textSecondary" align="center" style={{ marginTop: 20, fontSize: '1.2rem' }}>
        Ainda não tem uma conta?{' '}
        <Link href="/cadastro" color="#286909" style={{ fontSize: '1.2rem' }}>
          Cadastre-se
        </Link>
      </Typography>
      </Box>
    </Box>
  );
};

export default P_Login;
