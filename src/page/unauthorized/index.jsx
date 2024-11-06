import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'

export const Unauthorized = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <LockIcon sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Acesso Não Autorizado
        </Typography>
        <Typography variant="body1" paragraph>
          Desculpe, você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou entre em contato com o administrador do sistema.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#000000' }} href="/">
          Voltar para a Página Inicial
        </Button>
      </Box>
    </Container>
  )
}