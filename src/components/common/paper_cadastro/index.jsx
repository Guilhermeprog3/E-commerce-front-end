import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel, Link, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const P_Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f0f0f0",
        p: 2,
        border: "1px solid #0078D4",
        maxWidth: {
          xs: 555,
          sm: 820,
          md: 600,
          lg: 600,
          xl: 600
        },
        mx: "auto",
        marginTop: '8%',
        minHeight: {
          xs: '62vh',
          sm: '67vh',
          md: '50vh',
        },
      }}
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }} gutterBottom>
        Informe Seus Dados Abaixo.
      </Typography>

      <TextField 
        label="Seu Email" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        InputProps={{ sx: { fontSize: '1rem' } }}
      />
      
      <TextField 
        label="Seu Nome" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        InputProps={{ sx: { fontSize: '1rem' } }}
      />

      <TextField
        label="Sua senha"
        type={showPassword ? 'text' : 'password'}  // Altera entre 'text' e 'password'
        variant="outlined"
        fullWidth
        margin="normal"
        InputProps={{
          sx: { fontSize: '1rem' },
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

      <TextField
        label="Confirme Sua senha"
        type={showConfirmPassword ? 'text' : 'password'} 
        variant="outlined"
        fullWidth
        margin="normal"
        InputProps={{
          sx: { fontSize: '1rem' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword} 
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
          fontSize: '1rem',
          width: '50%',
          marginLeft: '25%',
          '&:hover': {
            backgroundColor: '#4B5563',
          }
        }}
      >
        Cadastro
      </Button>

      <Typography variant="body1" color="textSecondary" align="center" style={{ marginTop: 10, fontSize: '1rem' }}>
        E-mail já Cadastrado? Faça{' '}
        <Link href="/login" color="#286909" style={{ fontSize: '1rem' }}>
          Login.
        </Link>
      </Typography>
    </Box>
  );
};

export default P_Cadastro;
