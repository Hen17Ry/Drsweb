<template>
    <section id="top" class="hero-section">
      <div class="container">
        <div class="text-zone">
          <div>
            <h4>DRS</h4>
            <h6>LA MEILLEURE EXPÉRIENCE</h6>
            <NuxtLink to="#reservation" class="main-button">
                Faire Une Réservation
            </NuxtLink>
          </div>
        </div>
  
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 4000 }"
          pagination
          navigation
          class="hero-swiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Slide image" class="slide-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
</template>


<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import { Navigation, Pagination, Autoplay } from 'swiper/modules'
    
    const images = [
        '/drs/1.jpg',
        'drs/2.jpg',
        'drs/12.jpg',
        'drs/7.jpg',
        'drs/10.jpg',
        'drs/14.jpg',
        'drs/18.jpg',
    ]

</script>



<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.hero-section {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-family: 'Playfair Display', serif;
  overflow: hidden;
}

.hero-section .container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100vh;
}

.text-zone {
  flex: 1;
  background-image: url('/top-left-bg.jpg'); /* /public est déjà inclus par défaut dans Nuxt */
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
}

.text-zone h4 {
  font-size: 48px;
  margin-bottom: 10px;
  font-family: 'Dancing Script', cursive;
}

.text-zone h6 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
}

.main-button {
  background: white;
  color: #ff5757;
  padding: 14px 30px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.main-button:hover {
  background: #fff0f0;
}

.hero-swiper {
  flex: 2;
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Swiper Controls */
::v-deep(.swiper-button-prev),
::v-deep(.swiper-button-next) {
  color: white !important;
}

::v-deep(.swiper-button-prev:hover),
::v-deep(.swiper-button-next:hover) {
  color: #ff5757 !important;
}

::v-deep(.swiper-pagination-bullet) {
  background-color: #ffffff;
  opacity: 1;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

::v-deep(.swiper-pagination-bullet-active) {
  background-color: #ff5757;
  transform: scale(1.2);
}

/* Responsive TABLETTE */
@media (max-width: 992px) {
  .hero-section .container {
    flex-direction: column;
    height: auto;
  }

  .text-zone {
    text-align: center;
    align-items: center;
    padding: 40px 20px;
  }

  .text-zone h4 {
    font-size: 36px;
  }

  .text-zone h6 {
    font-size: 18px;
  }

  .hero-swiper {
    height: 50vh;
  }

  .slide-image {
    height: 100%;
  }
}

/* Responsive MOBILE */
@media (max-width: 600px) {
  .text-zone h4 {
    font-size: 28px;
  }

  .text-zone h6 {
    font-size: 16px;
  }

  .main-button {
    font-size: 14px;
    padding: 12px 24px;
  }

  .hero-swiper {
    height: 40vh;
  }
}

</style>