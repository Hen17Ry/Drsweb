<template>
  <header :class="['header', { 'scrolled': isScrolled }]">
    <div class="container header-container">
      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <img :src="isScrolled ? '/logo.svg' : '/logow.svg'" alt="DRS Guest House" class="logo-img" />
      </NuxtLink>

      <!-- Menu Burger -->
      <button class="menu-trigger" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="['bar', { 'open': isMenuOpen }]"></span>
        <span :class="['bar', { 'open': isMenuOpen }]"></span>
        <span :class="['bar', { 'open': isMenuOpen }]"></span>
      </button>

      <!-- Navigation -->
      <nav :class="['main-nav', { 'open': isMenuOpen }]">
        <ul class="nav-list">
          <li><a href="#hero" @click="closeMenu" class="nav-link">Accueil</a></li>
          <li><a href="#about" @click="closeMenu" class="nav-link">À Propos</a></li>
          <li><a href="#appart" @click="closeMenu" class="nav-link">Gallery</a></li>
          <li><a href="#disponibilite" @click="closeMenu" class="nav-link">Disponibilité</a></li>
          <li><a href="#reservation" @click="closeMenu" class="nav-link">Réservation</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  
  // Prevent body scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem 0;
  background-color: transparent;
  
  &.scrolled {
    background-color: white;
    padding: 0.75rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    
    .nav-link {
      color: #333;
      
      &:hover {
        color: var(--color-primary);
      }
    }
  }
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: block;
  z-index: 1100;
}

.logo-img {
  height: 10rem;
  width: auto;
  transition: height 0.3s ease;
  
  .scrolled & {
    height: 10rem;
  }
}

.menu-trigger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  
  .bar {
    display: block;
    height: 2px;
    width: 24px;
    margin: 3px 0;
    background-color: white;
    transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
    
    .scrolled & {
      background-color: #333;
    }
    
    &.open:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    &.open:nth-child(2) {
      opacity: 0;
    }
    
    &.open:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

.main-nav {
  transition: all 0.3s ease;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e51919;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #e51919;
    
    &::after {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .menu-trigger {
    display: flex;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background-color: white;
    padding: 6rem 2rem 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    
    &.open {
      transform: translateX(0);
    }
  }
  
  .nav-list {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
  
  .nav-link {
    color: #333;
    font-size: 1.1rem;
    display: block;
    width: 100%;
  }
}
</style>