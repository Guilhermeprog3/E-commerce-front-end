import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { GetProdutos } from '../../../server/api';
import CircularIndeterminate from '../circularIndeterminate';

function ProductRow({ rowId }) {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize] = useState(8)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [messageError, setMessageError] = useState('')

  React.useEffect(() => {
    setLoading(true)
    if (rowId == 1) {
      setPage(1)
    } else if (rowId == 2) {
      setPage(2)
    } else if (rowId == 3) {
      setPage(3)
    }
    const response = GetProdutos(page, pageSize)
    response.then(
      (dados) => {
        setProducts(dados.data.data)
      }
    ).catch((erro) => {
      setMessageError(erro)
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <CircularIndeterminate />
    );
  }

  if (error) {
    return (
      <p>{messageError}</p>
    );
  }
  return (
    <Box sx={{ position: 'relative', padding: '40px' }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{
          nextEl: `.custom-next-${rowId}`, // Apenas seta para o lado direito
        }}
        loop
        modules={[Navigation]}
        style={{ paddingBottom: '20px' }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          600: { slidesPerView: 2, slidesPerGroup: 2 },
          900: { slidesPerView: 3, slidesPerGroup: 3 },
          1200: { slidesPerView: 4, slidesPerGroup: 4 },
        }}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              sx={{
                border: '1px solid #e0e0e0',
                width: '290px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Box
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'contain',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8B96A5',
                }}>
                <img
                  src={product.imagemUrl}
                  alt={product.title}
                  style={{
                    width: '60%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                  <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    R$ {parseFloat(product.price).toFixed(2).replace('.', ',')}
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
                  <span style={{ fontSize: '12px' }}>Comprar</span>
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className={`custom-next-${rowId}`}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'black',
        }}>
        <ArrowCircleRightOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default function Product() {

  return (
    <div>
      <h2 style={{ color: '#4B5563', marginLeft: '45px' }}>Smartphones Premium</h2>

      <ProductRow
        rowId={1}
      />
      <ProductRow
        rowId={2}
      />
      <ProductRow
        rowId={3}
      />
    </div>
  );
}
