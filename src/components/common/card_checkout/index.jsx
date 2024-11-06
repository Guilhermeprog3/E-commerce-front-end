import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GetProduct } from '../../../server/api';
import CircularIndeterminate from '../circularIndeterminate';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../redux/cart/slice';

export default function CustomCard({ product }) {
  const [dataProducts, setDataProducts] = React.useState([]);
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const response = GetProduct(product.productId)
    response.then((dados) => {
      setDataProducts(dados.data);
    })
      .catch((erro) => {
        setMessageError(erro)
        setError("Erro ao carregar o carrinho");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <CircularIndeterminate />
    );
  }

  const hadleDeleteProduct = (id) => {
    dispatch(removeProduct({ productId: id }));
    setIsDeleted(true);
  }

  if (isDeleted) {
    return null;
  }

  return (
    <Card sx={{
      marginLeft: { xs: '10%', md: '1%', lg: '3%', sm: '35%', xl: '4%' },
      marginRight: { lg: '9%' },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row', sm: 'column', lg: 'row' },
      width: { xs: '120%', md: '85%', sm: '82%', lg: '108%', xl: '113%' },
      height: { xs: '28.5%', lg: '10%', md: '10%', sm: '20%' },
      marginTop: 0,
      backgroundColor: '#D9D9D954',
      justifyContent: 'space-between',
    }}>
      {/* Imagem do produto */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: 200, sm: '100%', lg: 280 },
          height: { xs: 200, md: 80, lg: 140, sm: '100%' }
        }}
        image={dataProducts.imagemUrl}
      />

      {/* Conteúdo do card */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: { xs: 0, md: '0.5%' } }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { sm: '1.5rem', md: '0.8rem', lg: '1rem' }, // Aumenta a fonte em telas pequenas e médias
            }}
          >
            {dataProducts.description}
          </Typography>

          <Button
            variant="contained"
            disableElevation
            sx={{
              marginTop: { lg: '2%', xl: '2%', sm: '10%', md: '5%', xs: '5%' },
              marginLeft: { lg: '2%', xl: '2%', sm: '15%', md: '5%', xs: '27%' },
              backgroundColor: 'white',
              height: { md: '20%', lg: '30%', xl: '30%' },
              color: 'black',
              width: { xs: '8rem', md: '8rem', lg: '8rem', xl: '15rem', sm: '15rem' },
              fontSize: { sm: '1.25rem', md: '1rem', lg: '1rem' } // Aumenta a fonte do botão em sm e md
            }}
          >
            R${parseFloat(dataProducts.price).toFixed(2).replace('.', ',')}
          </Button>
        </CardContent>
      </Box>

      <IconButton
        aria-label="delete"
        sx={{
          alignSelf: { xs: 'center', md: 'center' },
          marginTop: { xs: '1%', md: 0 }
        }}
        onClick={() => hadleDeleteProduct(dataProducts.id)}
      >
        <DeleteIcon sx={{ fontSize: { sm: '2.5rem', md: '3rem', } }} /> {/* Aumenta o ícone em sm e md */}
      </IconButton>
    </Card>
  );
}
