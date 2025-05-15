<template>
    <section class="disponibilite-section">
      <h2>Chambres réserver/occupé</h2>
  
      <div v-if="loading" class="loading">Chargement des disponibilités...</div>
  
      <table v-else>
        <thead>
          <tr>
            <th>Chambre</th>
            <th>Date</th>
            <th>Heure Début</th>
            <th>Heure Fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in disponibilites" :key="item.id">
            <td>{{ item.chambre }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.heured }}</td>
            <td>{{ item.heuref }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const disponibilites = ref([])
  const loading = ref(true)
  
  onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/disponibilite/get', {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
            })
      const data = await res.json()
      disponibilites.value = data
    } catch (err) {
      console.error('Erreur lors du chargement:', err)
    } finally {
      loading.value = false
    }
  })
  </script>
  
  <style scoped>
  .disponibilite-section {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 8px;
    background: #f9f9f9;
    animation: fadeIn 0.5s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  h2 {
    text-align: center;
    color: #f44336;
    margin-bottom: 20px;
  }
  
  .loading {
    text-align: center;
    font-style: italic;
    color: #f44336;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    animation: slideUp 0.6s ease;
  }
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f44336;
    color: #fff;
  }
  
  tr:hover {
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  </style>
  