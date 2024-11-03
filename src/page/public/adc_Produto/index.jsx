import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { PostProduto } from '../../../server/api';

function Adc_Produto() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [estoque, setEstoque] = useState('')
  const [codigo, setCodigo] = useState('')
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImagem(e.target.files[0]);
  };

  const createProduto = async () => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('name', nome);
    formData.append('description', descricao);
    formData.append('price', preco);
    formData.append('stock', estoque);
    formData.append('sku', codigo);

    if (!imagem) {
      console.error('Dados inválidos ou faltando.')
    } else {
      formData.append('files', imagem);
    }


    try {
      const dados = await PostProduto(formData)

      setNome('');
      setDescricao('');
      setPreco('');
      setEstoque('');
      setCodigo('');
      setImagem(null);


    } catch (error) {
      console.error("Erro ao criar produto:", error);
      setError("Erro ao criar produto. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false)
    }

  }


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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            id="descricao"
            label="Descrição"
            variant="outlined"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <TextField
            type="number"
            id="preco"
            label="Preço"
            variant="outlined"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <TextField
            type="number"
            id="estoque"
            label="Estoque"
            variant="outlined"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
          />
          <TextField
            id="codigo"
            label="Código do Produto"
            variant="outlined"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            sx={{ backgroundColor: 'black', color: 'white' }}
            startIcon={<CloudUploadIcon />}
            onChange={handleImageChange}
          >
            Adicionar Imagem
            <VisuallyHiddenInput
              type="file"
              multiple
            />
          </Button>

          <Button
            type="submit"
            variant="contained"
            onClick={createProduto}
            sx={{ backgroundColor: 'black', color: 'white' }}>
            {loading ? "Adicionando..." : "Adicionar Produto"}
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Adc_Produto;
