<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- Logo and Info -->
          <div class="footer-logo-section">
            <NuxtLink to="/" class="footer-logo">
              <img src="/logow.svg" alt="DRS Guest House" class="logo-img" />
            </NuxtLink>
            <p class="footer-intro">
              Une expérience de séjour exceptionnelle dans un cadre élégant et confortable.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-links">
            <h4 class="footer-title">Liens Rapides</h4>
            <ul class="footer-menu">
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#appart">Nos Chambres</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#disponibilite">Disponibilités</a></li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div class="footer-contact">
            <h4 class="footer-title">Contactez Nous</h4>
            <ul class="contact-list">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Cotonou, Bénin</span>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <span>+229 01-97-27-22-35</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>drsguesthouse0@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div class="footer-newsletter">
            <h4 class="footer-title">Newsletter</h4>
            <p>Inscrivez-vous pour recevoir nos offres spéciales</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Votre email" required />
              <button type="submit" aria-label="S'inscrire">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer Bottom / Copyright -->
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} DRS Guest House. Tous droits réservés.</p>
        <p>Design: Henry GOSSOU</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
.footer {
  background-color: #222;
  color: #f1f1f1;
}

.footer-top {
  padding: 5rem 0 3rem;
  background-color: #2a2a2a;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  display: block;
  margin-bottom: 1.5rem;
}

.logo-img {
  height: 4rem;
  width: auto;
}

.footer-intro {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #ccc;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e51919;
    transform: translateY(-3px);
  }
}

.footer-title {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #e51919;
  }
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
    display: block;
    padding: 0.25rem 0;
    
    &:hover {
      color: #e51919;
    }
  }
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
    color: #ccc;
  }
  
  i {
    color: #e51919;
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
}

.newsletter-form {
  display: flex;
  margin-top: 1.5rem;
  
  input {
    flex: 1;
    padding: 0.9rem 1rem;
    border: none;
    border-radius: 4px 0 0 4px;
    font-size: 0.95rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    
    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.15);
    }
    
    &::placeholder {
      color: #aaa;
    }
  }
  
  button {
    padding: 0 1.25rem;
    background-color: #e51919;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #d31717;
    }
  }
}

.footer-bottom {
  padding: 1.5rem 0;
  background-color: #222;
  font-size: 0.9rem;
  text-align: center;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  p {
    margin: 0;
    color: #aaa;
  }
}

// Media queries
@media (max-width: 768px) {
  .footer-top {
    padding: 3rem 0 2rem;
  }
  
  .footer-bottom .container {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>