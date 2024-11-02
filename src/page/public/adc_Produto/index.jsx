import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PostProduto from '../../../server/api';

function Adc_Produto() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  // Estados para capturar os valores dos campos
  const [formData, setFormData] = React.useState({
    nome: '',
    descricao: '',
    preco: '',
    estoque: '',
    codigo: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await PostProduto(formData);
      alert('Produto adicionado com sucesso!', result);
      setFormData({ nome: '', descricao: '', preco: '', estoque: '', codigo: '' });
    } catch (error) {
      alert('Erro ao adicionar produto.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <Paper
        elevation={3}
        sx={{ padding: 3, width: '100%', maxWidth: '30ch' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          noValidate
          autoComplete="off">
          <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            value={formData.nome}
            onChange={handleInputChange}
          />
          <TextField
            id="descricao"
            label="Descrição"
            variant="outlined"
            value={formData.descricao}
            onChange={handleInputChange}
          />
          <TextField
            id="preco"
            label="Preço"
            variant="outlined"
            value={formData.preco}
            onChange={handleInputChange}
          />
          <TextField
            type="number"
            id="estoque"
            label="Estoque"
            variant="outlined"
            value={formData.estoque}
            onChange={handleInputChange}
          />
          <TextField
            id="codigo"
            label="Código do Produto"
            variant="outlined"
            value={formData.codigo}
            onChange={handleInputChange}
          />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            sx={{ backgroundColor: 'black', color: 'white' }}
            startIcon={<CloudUploadIcon />}>
            Adicionar Imagem
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: 'black', color: 'white' }}>
            Adicionar Produto
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Adc_Produto;
