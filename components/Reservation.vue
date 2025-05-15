<template>
    <section class="reservation-section">
        <div class="overlay">
            <div class="reservation-container">
                
                <!-- Left Side -->
                <div class="reservation-left">
                <p class="subtitle">— Contactez Nous</p>
                <h2>
                    Réservez Une Table<br/>Ou Commandez Directement
                </h2>
                <p class="description">
                    Profitez d'un moment inoubliable dans notre cadre chaleureux. Réservez votre place ou commandez depuis chez vous.
                </p>

                <div class="contact-boxes">
                    <div class="contact-box">
                    <div class="icon">&#9742;</div>
                    <div>
                        <p class="label">Téléphone</p>
                        <p class="value">+229 01-97-27-22-35</p>
                    </div>
                    </div>

                    <div class="contact-box">
                    <div class="icon">&#9993;</div>
                    <div>
                        <p class="label">Email</p>
                        <p class="value">drsguesthouse0@gmail.com</p>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Right Side -->
                <div class="reservation-right">
                <h3>Réservation de Table</h3>
                <form class="form" @submit.prevent="openPayment">
                    <div class="row">
                        <input type="text" placeholder="Votre Nom*" v-model="form.nom" required />
                        <input type="email" placeholder="Votre Email" v-model="form.email" />
                    </div>
                    <div class="row">
                        <input type="tel" placeholder="Votre Téléphone" v-model="form.telephone" />
                        <input type="text" placeholder="Nombre de personnes" v-model="form.nombrepersonne" />
                    </div>
                    <div class="row">
                        <input type="date" v-model="form.jour" />
                        <input type="time" v-model="form.heure" />
                    </div>
                    <select v-model="form.option" required>
                        <option disabled value="">Choisissez une option</option>
                        <option value="nuitée">Nuitée</option>
                        <option value="flash">Flash</option>
                        <option value="anniverssaire">Anniverssaire</option>
                    </select>
                    <select v-model="form.chambre" required>
                        <option disabled value="">Choisissez une Chambre</option>
                        <option value="Romance">Romance</option>
                        <option value="Jouvence">Jouvence</option>
                        <option value="Bonheur">Bonheur</option>
                        <option value="Amour">Amour</option>
                        <option value="Désir">Désir</option>
                    </select>
                    <textarea placeholder="Message..." v-model="form.message"></textarea>
                    <button type="submit">Réserver Maintenant</button>
                </form>

                </div>

            </div>
        </div>
        <div v-if="messageSucces" class="notification">
            {{ messageSucces }}
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  email: '',
  telephone: '',
  nombrepersonne: '',
  jour: '',
  heure: '',
  option: '',
  chambre: '',
  message: '',
})
const messageSucces = ref('')
let openKkiapayWidget = null
let addKkiapayListener = null
let removeKkiapayListener = null

const envoyerReservation = async () => {
  try {
    const response = await fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')

    messageSucces.value = 'Réservation envoyée avec succès !'
    form.value = {
      nom: '',
      email: '',
      telephone: '',
      nombrepersonne: '',
      jour: '',
      heure: '',
      option: '',
      chambre: '',
      message: '',
    }

    // Masquer après 3 secondes
    setTimeout(() => {
      messageSucces.value = ''
    }, 3000)
  } catch (error) {
    console.error(error)
    messageSucces.value = "Échec de l'envoi de la réservation."
    setTimeout(() => {
      messageSucces.value = ''
    }, 3000)
  }
}

const openPayment = () => {
    openKkiapayWidget({
      amount: 2000,
      api_key: '1ff73100282511f096167dd95d93ba59',
      sandbox: true,
      name: form.nom,
      phone: form.telephone,
      email: form.email,
    })
}

const handlePaymentSuccess = (response) => {
    console.log('Paiement réussi:', response)
    envoyerReservation()
  }

onMounted(async () => {
    const kkiapay = await import('kkiapay')
    openKkiapayWidget = kkiapay.openKkiapayWidget
    addKkiapayListener = kkiapay.addKkiapayListener
    removeKkiapayListener = kkiapay.removeKkiapayListener

    addKkiapayListener('success', handlePaymentSuccess)
  })

  onBeforeUnmount(() => {
    if (removeKkiapayListener) {
      removeKkiapayListener('success', handlePaymentSuccess)
    }
  })

</script>


<style scoped>
    .reservation-section {
    background-image: url('/reservation-bg.jpg');
    background-size: cover;
    background-position: center;
    padding: 80px 0;
    position: relative;
    font-family: 'Segoe UI', sans-serif;
    }
    .overlay {
    padding: 60px 20px;
    }
    .reservation-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    color: white;
    }
    .reservation-left {
    flex: 1;
    min-width: 300px;
    }
    .subtitle {
    text-transform: uppercase;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 8px;
    }
    .reservation-left h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.4;
    }
    .description {
    font-size: 16px;
    color: #e0e0e0;
    margin-bottom: 30px;
    }
    .contact-boxes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    }
    .contact-box {
    background: white;
    color: #333;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-radius: 10px;
    flex: 1;
    min-width: 250px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .icon {
    background: #f44336;
    color: white;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 15px;
    }
    .label {
    font-weight: 600;
    }
    .value {
    font-size: 14px;
    }

    /* Right form */
    .reservation-right {
    flex: 1;
    background: white;
    color: #333;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    min-width: 320px;
    }
    .reservation-right h3 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 24px;
    color: #f44336;
    }
    .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    }
    .form .row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    }
    .form input,
    .form textarea,
    .form select {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    }
    .form input:focus,
    .form textarea:focus,
    .form select:focus {
    border-color: #f44336;
    box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2);
    }
    textarea {
    resize: vertical;
    min-height: 80px;
    }
    button {
    background: #f44336;
    color: white;
    border: none;
    padding: 14px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
    }
    button:hover {
    background: #d32f2f;
    }

    .notification {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f44336;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: opacity 0.3s ease;
        }


    @media (max-width: 768px) {
    .reservation-container {
        flex-direction: column;
    }
    .form .row {
        flex-direction: column;
    }
    }
</style>