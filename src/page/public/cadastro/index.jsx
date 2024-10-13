import React from 'react';
import P_Cadastro from '../../../components/common/paper_cadastro';
import { Box } from '@mui/material';

function Cadastro() {
  return (
    <Box
      sx={{
        marginBottom: { lg: '22%', xl: '22%', md: '27.5%', sm: '0.5%', xs: '0.5%' },
        marginTop: '-1%',
      }}>
      <P_Cadastro />
    </Box>
  );
}

export default Cadastro;
