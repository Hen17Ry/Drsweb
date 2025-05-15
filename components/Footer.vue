<template>
    <footer class="footer">
      <!-- Réseaux sociaux -->
      <div class="footer-left">
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
        </div>
        <div class="icon">
          <i class="fab fa-twitter"></i>
        </div>
        <div class="icon">
          <i class="fab fa-instagram"></i>
        </div>
      </div>
  
      <!-- Logo et texte central -->
      <div class="footer-center">
        <img src="/logow.svg" alt="DRS Logo" class="logo-img" />
      </div>
  
      <!-- Copyright -->
      <div class="footer-right">
        <p>&copy; DRS Guest House</p>
        <p>Design: Henry GOSSOU</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Aucun script pour le moment
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
  
  .footer {
    background-color: #ff3c28;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    gap: 2rem;
    text-align: center;
  }
  
  @media(min-width: 768px) {
    .footer {
      flex-direction: row;
      text-align: left;
    }
  }
  
  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .footer-left {
    flex-direction: row;
  }
  
  .icon {
    background-color: white;
    color: #ff3c28;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.3rem;
    font-size: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  .icon:hover {
    transform: translateY(-4px) scale(1.1);
    background-color: #ffeaea;
  }
  
  .footer-center .logo-img {
    width: 160px;
    height: auto;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  }
  
  .footer-right {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .footer-right p {
    margin: 0;
  }
  </style>  