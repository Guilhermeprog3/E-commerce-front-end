import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

const P_Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState(null); // Para capturar mensagens de erro
  const [successMessage, setSuccessMessage] = useState(null); // Para capturar mensagens de sucesso

  const navigate = useNavigate(); // Usando o hook useNavigate para redirecionamento

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setErrorMessage(null); // Limpa mensagens de erro antes de uma nova tentativa
    setSuccessMessage(null); // Limpa mensagens de sucesso
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.post(
        'https://e-commerce-back-end-nestjs.onrender.com/cadastro',
        {
          email: formData.email,
          name: formData.name,
          password: formData.password,
        }
      );

      // Caso a requisição seja bem-sucedida, processa a resposta
      if (response.status === 201 || response.status === 200) {
        setSuccessMessage('Cadastro realizado com sucesso!');
        // Redireciona para a página de login
        navigate('/login');
      }
    } catch (error) {
      // Captura qualquer erro de rede ou API
      if (error.response) {
        setErrorMessage(`Erro no cadastro: ${error.response.data.message || 'Erro desconhecido'}`);
      } else {
        setErrorMessage('Erro de conexão: não foi possível contatar o servidor.');
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f0f0f0',
        p: 2,
        border: '1px solid #0078D4',
        maxWidth: {
          xs: 555,
          sm: 820,
          md: 600,
          lg: 600,
          xl: 600,
        },
        mx: 'auto',
        marginTop: '8%',
        minHeight: {
          xs: '62vh',
          sm: '67vh',
          md: '50vh',
        },
      }}>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center' }}
        gutterBottom>
        Informe Seus Dados Abaixo.
      </Typography>

      <TextField
        label="Seu Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        value={formData.email}
        onChange={handleChange}
        InputProps={{ sx: { fontSize: '1rem' } }}
      />

      <TextField
        label="Seu Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={formData.name}
        onChange={handleChange}
        InputProps={{ sx: { fontSize: '1rem' } }}
      />

      <TextField
        label="Sua senha"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        fullWidth
        margin="normal"
        name="password"
        value={formData.password}
        onChange={handleChange}
        InputProps={{
          sx: { fontSize: '1rem' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Confirme Sua senha"
        type={showConfirmPassword ? 'text' : 'password'}
        variant="outlined"
        fullWidth
        margin="normal"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        InputProps={{
          sx: { fontSize: '1rem' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword}
                edge="end">
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
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
        onClick={handleSubmit}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '12px 0',
          fontSize: '1rem',
          width: '50%',
          marginLeft: '25%',
          '&:hover': {
            backgroundColor: '#4B5563',
          },
        }}>
        Cadastro
      </Button>

      {errorMessage && (
        <Typography
          variant="body1"
          color="error"
          align="center"
          style={{ marginTop: 10, fontSize: '1rem' }}>
          {errorMessage}
        </Typography>
      )}

      {successMessage && (
        <Typography
          variant="body1"
          color="primary"
          align="center"
          style={{ marginTop: 10, fontSize: '1rem' }}>
          {successMessage}
        </Typography>
      )}

      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        style={{ marginTop: 10, fontSize: '1rem' }}>
        E-mail já Cadastrado? Faça{' '}
        <Link
          href="/"
          color="#286909"
          style={{ fontSize: '1rem' }}>
          Login.
        </Link>
      </Typography>
    </Box>
  );
};

export default P_Cadastro;
