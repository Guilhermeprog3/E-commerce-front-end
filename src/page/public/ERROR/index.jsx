import { Typography, Button, Box } from '@mui/material';

export const Error = () => {
  return (
    <main>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          backgroundColor: '#f7f9fc',
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?error)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 'bold', color: '#000', fontSize: '96px', mb: 2 }}>
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: '#333', mb: 4 }}>
          Oops! Página não encontrada.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000000',
            color: '#fff',
            ':hover': {
              backgroundColor: '#000',
            },
          }}
          href="/">
          Voltar à página inicial
        </Button>
      </Box>
    </main>
  );
};
