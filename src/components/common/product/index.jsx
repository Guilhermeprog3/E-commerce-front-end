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

function ProductRow({ products, rowId }) {
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
                  src={product.image}
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
                    {product.price}
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
  const productsGroup1 = [
    {
      id: 1,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },

    {
      id: 2,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 7.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 3,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 6.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 4,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 5.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 5,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 6,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 7,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 8,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
  ];

  const productsGroup2 = [
    {
      id: 9,
      title: 'Samsung Galaxy S23 Ultra',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 7.500,00',
      oldPrice: 'R$ 8.500,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },

    {
      id: 10,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 11,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 12,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 13,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 14,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 15,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 16,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
  ];

  const productsGroup3 = [
    {
      id: 17,
      title: 'Google Pixel 8',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 5.000,00',
      oldPrice: 'R$ 6.000,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 18,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 19,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 20,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 21,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 22,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 23,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
    {
      id: 24,
      title: 'Apple iPhone 15 Pro Max 256GB',
      description:
        'Celular versátil com suporte para 5G e sistema de câmeras de alta qualidade. Experimente velocidades ultrarápidas e uma interface intuitiva para fácil navegação',
      price: 'R$ 8.000,00',
      oldPrice: 'R$ 9.300,00',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118387654/fee_786_587_png',
    },
  ];

  return (
    <div>
      <h2 style={{ color: '#4B5563', marginLeft: '45px' }}>Smartphones Premium</h2>

      <ProductRow
        products={productsGroup1}
        rowId={1}
      />
      <ProductRow
        products={productsGroup2}
        rowId={2}
      />
      <ProductRow
        products={productsGroup3}
        rowId={3}
      />
    </div>
  );
}
