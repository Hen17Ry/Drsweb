<template>
  <section id="appart" class="appartements-section">
    <div class="container">
      <div class="section-header text-center animate-on-scroll">
        <h6 class="subtitle">Nos Appartements</h6>
        <h2 class="section-title">Découvrez Nos Espaces</h2>
        <p class="section-intro">
          Des studios élégants et confortables, conçus pour rendre votre séjour exceptionnel
        </p>
      </div>
      
      <div class="appartements-display">
        <div class="appartements-track animate-on-scroll">
          <div
            v-for="(item, index) in appartements"
            :key="index"
            class="appartement-card"
            @mouseenter="activeCard = index"
            @mouseleave="activeCard = -1"
          >
            <div class="card-image">
              <img :src="item.image" :alt="item.nom" class="appart-img" loading="lazy" />
              <div class="card-number">{{ item.numero }}</div>
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ item.nom }}</h3>
              <div :class="['card-description', { 'active': activeCard === index }]">
                <p v-html="item.description"></p>
                <NuxtLink to="#reservation" class="card-btn">
                  Réserver
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all-wrapper text-center">
        <NuxtLink to="#reservation" class="btn btn-outline">
          Voir toutes nos chambres
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeCard = ref(-1);

const appartements = [
  {
    numero: '01',
    nom: 'ROMANCE',
    description:
      'Vivez ici une ambiance de <strong>ROMANCE</strong> et laissez-vous transporter dans un monde de passion !',
    image: '/drs/1.jpg',
  },
  {
    numero: '02',
    nom: 'JOUVENCE',
    description:
      'Cet endroit est une fontaine de <strong>JOUVENCE</strong> qui vous procure un rajeunissement éternel !',
    image: '/drs/2.jpg',
  },
  {
    numero: '03',
    nom: 'BONHEUR',
    description:
      'Vous êtes ici au coeur d\'un havre de joie et de tendresse. Imprégnez-vous de l\'aura lumineuse du <strong>BONHEUR !</strong>',
    image: '/drs/10.jpg',
  },
  {
    numero: '04',
    nom: 'AMOUR',
    description:
      'Dans cette chambre, chaque instant devient une éternité. Laissez-vous emporter par la magie de l\'<strong>AMOUR</strong>.',
    image: '/drs/14.jpg',
  },
  {
    numero: '05',
    nom: 'DESIRS',
    description:
      'Sentez ce parfum mystique qui vous envoûte et vous plonge dans vos <strong>DESIRS</strong> les plus brûlants !',
    image: '/drs/18.jpg',
  },
];
</script>

<style scoped lang="scss">
.appartements-section {
  padding: 6rem 0;
  background-color: #f9f9f9;
  position: relative;
}

.section-header {
  margin-bottom: 3.5rem;
}

.text-center {
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #e51919;
  }
}

.section-intro {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
  line-height: 1.6;
}

.appartements-display {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 1rem 0 3rem;
}

.appartements-track {
  display: flex;
  gap: 1.5rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 1rem 0.5rem;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  scroll-snap-type: x mandatory;
  
  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
}

.appartement-card {
  flex: 0 0 auto;
  width: 330px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  background-color: white;
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

.card-image {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.appart-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
  
  .appartement-card:hover & {
    transform: scale(1.1);
  }
}

.card-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #e51919;
  color: white;
  font-weight: 700;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8) 100%);
  z-index: 1;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.card-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-description {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  color: white;
  font-size: 0.95rem;
  
  &.active {
    max-height: 200px;
    opacity: 1;
    margin-top: 0.75rem;
  }
  
  p {
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
  
  strong {
    color: #ff9e9e;
  }
}

.card-btn {
  display: inline-block;
  background-color: white;
  color: #e51919;
  padding: 0.6rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f8f8f8;
    transform: translateY(-3px);
  }
}

.view-all-wrapper {
  margin-top: 3rem;
}

// Media queries
@media (max-width: 992px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .appartement-card {
    width: 280px;
  }
  
  .card-image {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .appartements-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .appartement-card {
    width: 260px;
  }
  
  .card-image {
    height: 320px;
  }
}

@media (max-width: 576px) {
  .appartement-card {
    width: 240px;
  }
  
  .card-image {
    height: 300px;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .card-description {
    font-size: 0.9rem;
  }
}
</style>