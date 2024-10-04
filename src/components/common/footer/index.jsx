import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import './index.css';

function Footer() {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#000000',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0,
        boxSizing: 'border-box',
        padding: 5,
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          textAlign: { xs: 'center', md: 'left' },
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          flexWrap: 'wrap',
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}>
            Telefone: (XX) XXXX-XXXX
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}>
            <MailSharpIcon sx={{ mr: 1, display: { xs: 'none', sm: 'inline-flex' } }} />
            E-mail: contato@seudominio.com
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}>
            <AccessTimeFilledIcon sx={{ mr: 1, display: { xs: 'none', sm: 'inline-flex' } }} />
            Horário de atendimento: Segunda a sexta, das 9h às 18h.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            Instagram: @seudominio
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            Twitter: @seudominio
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            Facebook: facebook.com/seudominio
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            YouTube: youtube.com/seudominio
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { lg: '14px', xs: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}>
            Linkedin: linkedin.com/company/seudominio
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
