import './index.css';
import { register } from 'swiper/element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

register();

function Carousel() {
  const data = [
    {
      id: '1',
      image: 'https://tm.ibxk.com.br/2022/03/28/28165112105557.jpg?ims=1280x480',
    },
    {
      id: '2',
      image:
        'https://1.bp.blogspot.com/-HwE_rWF3YD0/YCn_t71_B5I/AAAAAAAAI7U/X2iT3p78r1AeqH_2lPqEKrMPb1Vz6QeMwCLcBGAsYHQ/w640-h356/s21u8.JPG',
    },
    {
      id: '3',
      image:
        'https://media.pocketnow.com/styles/xlarge/public/2021/02/Galaxy-S21-Ultra-review-1.jpg?itok=d69xWrU7',
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '90%',
          md: '80%',
          lg: '1000px',
        },
        height: {
          xs: '150px',
          sm: '180px',
          md: '200px',
          lg: '250px',
        },
        margin: '0 auto',
      }}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        style={{ height: '100%' }}>
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              border: '15px solid #475569',
            }}>
            <img
              src={item.image}
              alt="image"
              style={{
                width: '60%', 
                height: '100%', 
                // objectFit: 'contain', // Mantendo proporção - usar caso precise
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Carousel;
