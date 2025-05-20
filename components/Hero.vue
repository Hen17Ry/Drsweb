<template>
  <section id="hero" class="hero-section">
    <div class="hero-overlay"></div>
    
    <Swiper
      :modules="[EffectFade, Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :speed="1200"
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      navigation
      class="hero-swiper"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index" class="hero-slide">
        <div class="slide-image-wrapper">
          <img :src="image" :alt="`DRS Guest House - ${index + 1}`" class="slide-image" />
        </div>
        <div class="slide-content container">
          <div class="slide-text">
            <h1 class="slide-title" :class="`animate-title-${index % 3}`">
              {{ slideTexts[index % slideTexts.length].title }}
            </h1>
            <p class="slide-subtitle">
              {{ slideTexts[index % slideTexts.length].subtitle }}
            </p>
            <NuxtLink to="#reservation" class="btn btn-primary">
              Réserver maintenant
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrow">
        <span></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/drs/1.jpg',
  '/drs/2.jpg',
  '/drs/12.jpg',
  '/drs/7.jpg',
  '/drs/10.jpg',
  '/drs/14.jpg',
  '/drs/18.jpg',
];

const slideTexts = [
  {
    title: "Vivez une Expérience Unique",
    subtitle: "Découvrez le luxe et le confort de DRS Guest House",
  },
  {
    title: "Élégance & Raffinement",
    subtitle: "Des espaces pensés pour votre bien-être",
  },
  {
    title: "Un Havre de Paix",
    subtitle: "Détendez-vous dans un cadre exceptionnel",
  },
  {
    title: "Votre Maison Loin de Chez Vous",
    subtitle: "Des séjours adaptés à toutes vos envies",
  },
];
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.hero-swiper {
  height: 100vh;
  width: 100%;
}

.hero-slide {
  position: relative;
  height: 100vh;
  width: 100%;
}

.slide-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 6s ease;
  
  .swiper-slide-active & {
    transform: scale(1);
  }
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
  padding-top: 4rem;
}

.slide-text {
  max-width: 550px;
  color: white;
}

.slide-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  
  .swiper-slide-active & {
    animation: slideUp 0.8s forwards 0.3s;
  }
}

.slide-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  opacity: 0;
  
  .swiper-slide-active & {
    animation: fadeIn 0.8s forwards 0.6s;
  }
}

.btn {
  opacity: 0;
  
  .swiper-slide-active & {
    animation: fadeIn 0.8s forwards 0.9s;
  }
}

.animate-title-0 {
  transform-origin: left;
  
  .swiper-slide-active & {
    animation: slideLeft 0.8s forwards 0.3s;
  }
}

.animate-title-1 {
  transform-origin: center;
  
  .swiper-slide-active & {
    animation: scaleUp 0.8s forwards 0.3s;
  }
}

.animate-title-2 {
  transform: translateY(30px);
  
  .swiper-slide-active & {
    animation: slideUp 0.8s forwards 0.3s;
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// Scroll indicator
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
}

.mouse {
  width: 1.75rem;
  height: 2.75rem;
  border: 2px solid white;
  border-radius: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
}

.wheel {
  width: 4px;
  height: 8px;
  background-color: white;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  animation: scrollWheel 1.5s infinite;
}

.arrow {
  margin-top: 10px;
  
  span {
    display: block;
    width: 10px;
    height: 10px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    animation: arrowBounce 1.5s infinite;
  }
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes arrowBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(45deg);
  }
  40% {
    transform: translateY(-8px) rotate(45deg);
  }
  60% {
    transform: translateY(-4px) rotate(45deg);
  }
}

// Media queries
@media (max-width: 768px) {
  .slide-title {
    font-size: 2.5rem;
  }
  
  .slide-subtitle {
    font-size: 1rem;
  }
  
  .slide-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  .slide-text {
    max-width: 100%;
  }
}
</style>