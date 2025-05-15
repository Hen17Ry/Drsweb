<template>
  <header class="header-area">
    <div class="container">
      <nav class="main-nav">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <img src="public/logo.svg" alt="Logo Klassy Cafe" />
        </NuxtLink>

        <!-- Menu Burger -->
        <button class="menu-trigger" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <!-- Navigation -->
        <ul :class="['nav', { open: isMenuOpen }]">
          <li><a href="/#hero" @click="closeMenu">Accueil</a></li>
          <li><a href="/#about" @click="closeMenu">À Propos</a></li>
          <li><a href="/#appart" @click="closeMenu">Gallery</a></li>
          <li><a href="/" @click="closeMenu">Disponibilité</a></li>
          <li><a href="/#reserve" @click="closeMenu">Contactez Nous</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap');

.header-area {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Playfair Display', serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo img {
  height: 150px;
  width: auto;
  object-fit: contain;
}

.menu-trigger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.menu-trigger .bar {
  height: 3px;
  width: 100%;
  background-color: #ff5757;
  margin: 3px 0;
  transition: all 0.3s ease;
}

.nav {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.nav li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s;
}

.nav li a:hover,
.nav li a.active {
  color: #ff5757;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-trigger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    text-align: center;
    display: none;
    padding: 20px 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .nav.open {
    display: flex;
  }

  .nav li {
    margin: 12px 0;
  }

  .nav li a {
    font-size: 20px;
  }
}
</style>