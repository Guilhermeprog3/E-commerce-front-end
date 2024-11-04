import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { GetProdutosForYou } from '../../../server/api';
import CircularIndeterminate from '../circularIndeterminate';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, setCartId  } from '../../../redux/cart/slice.js';

export default function ProductForYou() {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')
  const dispatch = useDispatch();
  const { cartId, items } = useSelector((state) => state.cart);
  
  React.useEffect(() =>{
    setLoading(true)
    const response = GetProdutosForYou()
    response.then(
      (dados) =>{
        setProducts(dados.data.data)
      } 
    ).catch((erro) =>{
      setMessageError(erro)
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

    if (loading) {
    return (
      <CircularIndeterminate/>
    );
  }
  
    if (error) {
    return (
      <p>{messageError}</p>
    );
  }

  const handleAddToCart = async (product) => {
  const dispatch = useDispatch();
  const { cartId, items, userId } = useSelector((state) => state.cart);

  if (!cartId) {
    try {
      const response = await PostCart({
        userId: userId, // Passando o userId para a criação do carrinho
        products: [{ productId: product.productId, quantity: 1 }] // Adicionando o primeiro produto
      });
      dispatch(setCartId(response.data.cartId)); 
    } catch (error) {
      console.error("Erro ao criar o carrinho:", error);
      return; // Saia da função se houver erro
    }
  } else {
    // Se o carrinho já existe, atualiza com o novo produto
    try {
      await PatchCart(cartId, {
        products: [...items, { productId: product.productId, quantity: 1 }]
      });
    } catch (error) {
      console.error("Erro ao atualizar o carrinho:", error);
      return; // Saia da função se houver erro
    }
  }

  // Após a criação ou atualização do carrinho, adiciona o item ao estado do Redux
  dispatch(addItemToCart({ userId, productId: product.productId, quantity: 1 }));
};

  return (
    <Box sx={{ padding: '40px' }}>
      <h2 style={{ color: '#4B5563', paddingBottom: '20px' }}>Produtos Que Combinam Com Você</h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Espaço entre os cards
          flexWrap: 'wrap', // Permite que os cards quebrem de linha em telas menores
          gap: '20px', // Espaçamento entre os cards
        }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 'calc(25% - 20px)', // Cada card ocupa 25% da largura com margem
              minWidth: '250px', // Define uma largura mínima para telas menores
              border: '1px solid #e0e0e0',
              height: '100%', // Garante que o card ocupe a altura total
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Distribui o conteúdo do card
            }}>
            <CardMedia
              sx={{
                width: '100%',
                height: 150,
                objectFit: 'contain',
                backgroundColor: '#8B96A5',
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              image={product.imagemUrl}
              title={product.name}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}>
                {product.description.length > 80  ? product.description.slice(0, 70) + "..."  : product.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
                  R${parseFloat(product.price).toFixed(2).replace('.', ',')}
                </Typography>
                <Typography
                  sx={{
                    color: 'gray',
                    textDecoration: 'line-through',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}>
                  {product.oldPrice}
                </Typography>
              </Box>
            </CardContent>

            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-16px',
                marginBottom: '10px',
              }}>
              <Button
                size="large"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  width: '70%',
                  padding: '16px',
                  borderRadius: '0px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}>
                <span style={{ fontSize: '12px' }} onClick={() => handleProductClick(product.id)}>Adicionar ao Carrinho</span>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
