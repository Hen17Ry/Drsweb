<template>
  <section id="reservation" class="reservation-section">
    <div class="reservation-background">
      <div class="container">
        <div class="reservation-wrapper animate-on-scroll">
          
          <!-- Left Side -->
          <div class="reservation-left">
            <div class="section-header">
              <h6 class="subtitle">Contactez-nous</h6>
              <h2 class="section-title">Réservez Votre Séjour</h2>
              <p class="section-intro">
                Profitez d'un moment inoubliable dans notre cadre chaleureux. Réservez votre chambre dès maintenant.
              </p>
            </div>
            
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-text">
                  <h4>Téléphone</h4>
                  <p>+229 01-97-27-22-35</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-text">
                  <h4>Email</h4>
                  <p>drsguesthouse0@gmail.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-text">
                  <h4>Adresse</h4>
                  <p>Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Side - Form -->
          <div class="reservation-right">
            <div class="form-header">
              <h3>Réservation</h3>
            </div>
            
            <form class="reservation-form" @submit.prevent="openPayment">
              <div class="form-grid">
                <div class="form-group">
                  <label for="nom">Nom Complet*</label>
                  <input 
                    type="text" 
                    id="nom" 
                    v-model="form.nom" 
                    placeholder="Votre nom"
                    required 
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    placeholder="Votre email"
                  />
                </div>
                
                <div class="form-group">
                  <label for="telephone">Téléphone*</label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    v-model="form.telephone" 
                    placeholder="Votre numéro"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="nombrepersonne">Nombre de personnes</label>
                  <input 
                    type="number" 
                    id="nombrepersonne" 
                    v-model="form.nombrepersonne" 
                    placeholder="Nombre de personnes"
                    min="1"
                  />
                </div>
                
                <div class="form-group">
                  <label for="jour">Date</label>
                  <input 
                    type="date" 
                    id="jour" 
                    v-model="form.jour" 
                  />
                </div>
                
                <div class="form-group">
                  <label for="heure">Heure</label>
                  <input 
                    type="time" 
                    id="heure" 
                    v-model="form.heure" 
                  />
                </div>
                
                <div class="form-group">
                  <label for="option">Type de séjour*</label>
                  <select id="option" v-model="form.option" required>
                    <option disabled value="">Choisissez une option</option>
                    <option value="nuitée">Nuitée</option>
                    <option value="flash">Flash</option>
                    <option value="anniverssaire">Anniversaire</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="chambre">Chambre*</label>
                  <select id="chambre" v-model="form.chambre" required>
                    <option disabled value="">Choisissez une chambre</option>
                    <option value="Romance">Romance</option>
                    <option value="Jouvence">Jouvence</option>
                    <option value="Bonheur">Bonheur</option>
                    <option value="Amour">Amour</option>
                    <option value="Désir">Désir</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="Votre message ou demandes spéciales"
                  rows="4"
                ></textarea>
              </div>
              
              <button type="submit" class="submit-button">
                <span>Réserver maintenant</span>
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    
    <!-- Notification -->
    <Transition name="fade">
      <div v-if="messageSucces" class="notification" :class="{ 'success': isSuccess, 'error': !isSuccess }">
        <i :class="isSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
        <p>{{ messageSucces }}</p>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const form = ref({
  nom: '',
  email: '',
  telephone: '',
  nombrepersonne: '',
  jour: '',
  heure: '',
  option: '',
  chambre: '',
  message: ''
});

const messageSucces = ref('');
const isSuccess = ref(true);
let openKkiapayWidget = null;
let addKkiapayListener = null;
let removeKkiapayListener = null;

const envoyerReservation = async () => {
  try {
    const response = await fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) throw new Error('Erreur lors de l\'envoi');

    messageSucces.value = 'Réservation envoyée avec succès !';
    isSuccess.value = true;
    
    // Reset form
    form.value = {
      nom: '',
      email: '',
      telephone: '',
      nombrepersonne: '',
      jour: '',
      heure: '',
      option: '',
      chambre: '',
      message: ''
    };

    // Hide notification after 3 seconds
    setTimeout(() => {
      messageSucces.value = '';
    }, 4000);
  } catch (error) {
    messageSucces.value = "Échec de l'envoi de la réservation.";
    isSuccess.value = false;
    
    setTimeout(() => {
      messageSucces.value = '';
    }, 4000);
  }
};

const openPayment = () => {
  openKkiapayWidget({
    amount: 2000,
    api_key: '1ff73100282511f096167dd95d93ba59',
    sandbox: true,
    name: form.value.nom,
    phone: form.value.telephone,
    email: form.value.email,
  });
};

const handlePaymentSuccess = (response) => {
  envoyerReservation();
};

onMounted(async () => {
  try {
    const kkiapay = await import('kkiapay');
    openKkiapayWidget = kkiapay.openKkiapayWidget;
    addKkiapayListener = kkiapay.addKkiapayListener;
    removeKkiapayListener = kkiapay.removeKkiapayListener;

    addKkiapayListener('success', handlePaymentSuccess);
  } catch (error) {
    console.error("Erreur lors du chargement de Kkiapay:", error);
  }
});

onBeforeUnmount(() => {
  if (removeKkiapayListener) {
    removeKkiapayListener('success', handlePaymentSuccess);
  }
});
</script>

<style scoped lang="scss">
.reservation-section {
  padding: 6rem 0;
  position: relative;
}

.reservation-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/reservation-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 4rem 0;
}

.reservation-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.reservation-left {
  color: white;
}

.section-title {
  font-size: 2.5rem;
  line-height: 1.3;
  position: relative;
  margin-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #e51919;
  }
}

.section-intro {
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.contact-icon {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgba(229, 25, 25, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 1.25rem;
    color: white;
  }
}

.contact-text {
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
}

.reservation-right {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.form-header {
  background-color: #e51919;
  padding: 1.5rem 2rem;
  
  h3 {
    color: white;
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }
}

.reservation-form {
  padding: 2.5rem 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: inherit;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #e51919;
      box-shadow: 0 0 0 3px rgba(229, 25, 25, 0.1);
      background-color: white;
    }
    
    &::placeholder {
      color: #aaa;
    }
  }
  
  textarea {
    resize: vertical;
  }
}

.submit-button {
  background-color: #e51919;
  color: white;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: #d31717;
    
    i {
      transform: translateX(5px);
    }
  }
}

.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-width: 400px;
  
  &.success {
    background-color: #10b981;
  }
  
  &.error {
    background-color: #ef4444;
  }
  
  i {
    font-size: 1.5rem;
  }
  
  p {
    margin: 0;
    line-height: 1.5;
  }
}

// Transitions
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

// Media queries
@media (max-width: 992px) {
  .reservation-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .reservation-left {
    order: 1;
  }
  
  .reservation-right {
    order: 0;
  }
  
  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
  
  .contact-item {
    flex: 1 0 calc(50% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .reservation-section {
    padding: 4rem 0;
  }
  
  .reservation-background {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
  }
  
  .notification {
    top: auto;
    bottom: 2rem;
    left: 1rem;
    right: 1rem;
    max-width: none;
  }
}

@media (max-width: 576px) {
  .reservation-form {
    padding: 1.5rem;
  }
  
  .form-header {
    padding: 1.25rem;
  }
}
</style>