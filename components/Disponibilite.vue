<template>
  <section id="disponibilite" class="disponibilite-section">
    <div class="container">
      <div class="section-header text-center animate-on-scroll">
        <h6 class="subtitle">Disponibilités</h6>
        <h2 class="section-title">Chambres Réservées</h2>
        <p class="section-intro">
          Consultez en temps réel les disponibilités de nos chambres
        </p>
      </div>
      
      <div class="disponibilite-content animate-on-scroll">
        <div v-if="loading" class="loading-state">
          <div class="loading-spinner"></div>
          <p>Chargement des disponibilités...</p>
        </div>
        
        <template v-else>
          <div class="dispo-table-wrapper">
            <table class="dispo-table">
              <thead>
                <tr>
                  <th>Chambre</th>
                  <th>Date</th>
                  <th>Début</th>
                  <th>Fin</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in disponibilites" :key="index" class="table-row">
                  <td><span class="chambre-name">{{ item.chambre }}</span></td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.heured }}</td>
                  <td>{{ item.heuref }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div v-if="disponibilites.length === 0" class="no-data">
            <i class="fas fa-calendar-check"></i>
            <p>Toutes nos chambres sont actuellement disponibles</p>
          </div>
        </template>
      </div>
      
      <div class="cta-wrapper text-center">
        <p class="cta-text">Vous ne trouvez pas ce que vous cherchez?</p>
        <NuxtLink to="#reservation" class="btn btn-primary">
          Contactez-nous
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const disponibilites = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    // Simulons un délai pour montrer l'animation de chargement
    setTimeout(async () => {
      const res = await fetch('/api/disponibilite/get', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      const data = await res.json();
      disponibilites.value = data;
      loading.value = false;
    }, 1000);
  } catch (err) {
    console.error("Erreur lors de la récupération des disponibilités:", err);
    loading.value = false;
  }
});
</script>

<style scoped lang="scss">
.disponibilite-section {
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

.disponibilite-content {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  overflow: hidden;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(229, 25, 25, 0.2);
  border-radius: 50%;
  border-top-color: #e51919;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.dispo-table-wrapper {
  overflow-x: auto;
  margin: 0 -1rem;
}

.dispo-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  
  th, td {
    padding: 1.25rem 1.5rem;
  }
  
  thead tr {
    background-color: #f5f5f5;
  }
  
  th {
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
  
  tbody tr {
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #f9f9f9;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  td {
    color: #666;
  }
}

.chambre-name {
  font-weight: 600;
  color: #e51919;
}

.no-data {
  text-align: center;
  padding: 3rem 0;
  color: #999;
  
  i {
    font-size: 3rem;
    color: #e5e5e5;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
  }
}

.cta-wrapper {
  margin-top: 2rem;
}

.cta-text {
  color: #666;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
}

// Animation pour les lignes du tableau
.table-row {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
  
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: 0.1s * $i;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Media queries
@media (max-width: 992px) {
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .disponibilite-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .disponibilite-content {
    padding: 1.5rem;
  }
  
  .dispo-table th,
  .dispo-table td {
    padding: 1rem;
  }
}

@media (max-width: 576px) {
  .disponibilite-content {
    padding: 1rem;
  }
  
  .dispo-table th,
  .dispo-table td {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}
</style>