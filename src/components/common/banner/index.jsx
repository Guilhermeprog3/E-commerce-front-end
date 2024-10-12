import { register } from 'swiper/element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'; // Importando o módulo Autoplay

register();

function Banner() {
  const data = [
    {
      id: '1',
      image: 'https://i.imgur.com/at90mq5.png',
    },
    {
      id: '2',
      image: 'https://i.imgur.com/HhoheQu.png',
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Configuração de autoplay
      modules={[Autoplay]} // Adicionando o módulo Autoplay
      style={{ height: '400px' }} // Altura fixa para o swiper
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          <img
            src={item.image}
            alt="image"
            style={{
              width: '100%', // Ajuste a largura para 100%
              height: '100%', // Ajuste a altura para 100%
              objectFit: 'contain', // Mantenha a proporção da imagem
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
