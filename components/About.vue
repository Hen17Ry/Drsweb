<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-wrapper animate-on-scroll">
        <!-- Left Column -->
        <div class="about-left">
          <div class="section-header">
            <h6 class="subtitle">À propos de nous</h6>
            <h2 class="section-title">Vivez Un Séjour Inoubliable<br> Avec DRS Guest House</h2>
          </div>
          
          <div class="about-content">
            <p class="about-text">
              Bienvenue à <strong>DRS Guest House</strong>, une résidence d'exception où confort et praticité
              s'allient pour répondre à vos besoins. Nous proposons des studios meublés élégants, chacun équipé d'un
              garage privé, idéal pour vos séjours de courte ou longue durée, qu'ils soient professionnels ou personnels.
            </p>
            <p class="about-text">
              Profitez d'un cadre moderne et chaleureux, conçu pour offrir une expérience unique. Nos tarifs flexibles
              s'adaptent à toutes les occasions, que ce soit pour un week-end détente, un voyage d'affaires, ou des
              événements spéciaux.
            </p>
            
            <div class="features">
              <div class="feature">
                <div class="feature-icon">
                  <i class="fas fa-bed"></i>
                </div>
                <div class="feature-text">
                  <h4>Confort Premium</h4>
                  <p>Des chambres luxueuses avec tout le confort moderne</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="feature-icon">
                  <i class="fas fa-car"></i>
                </div>
                <div class="feature-text">
                  <h4>Garage Privé</h4>
                  <p>Un espace sécurisé pour votre véhicule</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Grid -->
          <div class="gallery-grid">
            <div class="gallery-item gallery-item-1">
              <img src="/drs/5.jpg" alt="Salon" class="gallery-img" loading="lazy" />
            </div>
            <div class="gallery-item gallery-item-2">
              <img src="/drs/1.jpg" alt="Chambre 1" class="gallery-img" loading="lazy" />
            </div>
            <div class="gallery-item gallery-item-3">
              <img src="/drs/9.jpg" alt="Chambre 2" class="gallery-img" loading="lazy" />
            </div>
          </div>
        </div>
        
        <!-- Right Column -->
        <div class="about-right animate-on-scroll">
          <div class="video-thumbnail">
            <img src="/drs/2.jpg" alt="Vidéo présentation" class="thumbnail-img" loading="lazy" />
            <a href="https://youtu.be/X66tNMH7Q7A" target="_blank" class="play-button">
              <i class="fa fa-play"></i>
            </a>
            <div class="video-caption">
              <span>Découvrez DRS Guest House</span>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="quote-mark">"</div>
            <p class="testimonial-text">
              Une expérience exceptionnelle dans un cadre magnifique. Le service est impeccable et l'accueil chaleureux.
            </p>
            <div class="testimonial-author">
              <span class="author-name">Henry GOSSOU</span>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="quote-mark">"</div>
            <p class="testimonial-text">
              Une expérience exceptionnelle dans un cadre magnifique. Le service est impeccable et l'accueil chaleureux.
            </p>
            <div class="testimonial-author">
              <span class="author-name">Théophile SOSSA</span>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // Animation for staggered features
  gsap.from('.feature', {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.features',
      start: 'top 80%',
    }
  });
  
  // Animation for gallery items
  gsap.from('.gallery-item', {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.gallery-grid',
      start: 'top 80%',
    }
  });
});
</script>

<style scoped lang="scss">
.about-section {
  padding: 6rem 0;
  background-color: white;
  position: relative;
  overflow: hidden;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.section-header {
  margin-bottom: 2rem;
}

.subtitle {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.25rem;
  color: #e51919;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  line-height: 1.3;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #e51919;
  }
}

.about-content {
  margin-bottom: 2.5rem;
}

.about-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  
  strong {
    color: #333;
  }
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(229, 25, 25, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 1.5rem;
    color: #e51919;
  }
}

.feature-text {
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  margin-top: 3rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.15);
    
    .gallery-img {
      transform: scale(1.1);
    }
  }
}

.gallery-item-1 {
  grid-column: 1 / 2;
  aspect-ratio: 1 / 1;
}

.gallery-item-2 {
  grid-column: 2 / 3;
  aspect-ratio: 1 / 1;
}

.gallery-item-3 {
  grid-column: 3 / 4;
  aspect-ratio: 1 / 1;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.video-thumbnail {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.thumbnail-img {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(229, 25, 25, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: pulse 2s infinite;
  }
  
  &:hover {
    background-color: #e51919;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.video-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 1.5rem;
  color: white;
  font-weight: 500;
}

.testimonial {
  background-color: #f9f9f9;
  padding: 2.5rem;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.quote-mark {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 5rem;
  font-family: 'Playfair Display', serif;
  color: rgba(229, 25, 25, 0.1);
  line-height: 1;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-name {
  font-weight: 600;
}

.stars {
  color: #e51919;
  font-size: 0.9rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

// Media queries
@media (max-width: 992px) {
  .about-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .play-button {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-item-3 {
    grid-column: 1 / 3;
  }
  
  .testimonial {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>