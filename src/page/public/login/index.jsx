import React from 'react';
import P_Login from '../../../components/common/paper_login';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          marginBottom: { lg: '22%', xl: '22%', md: '27.5%', sm: '0.5%', xs: '0.5%' },
          marginTop: '10%',
        }}>
        <P_Login />
      </Box>
    </Box>
  );
}

export default Login;
