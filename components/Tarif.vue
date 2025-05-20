<template>
  <section id="tarifs" class="tarifs-section">
    <div class="tarifs-background">
      <div class="container">
        <div class="section-header text-center animate-on-scroll">
          <h6 class="subtitle">Nos Tarifs</h6>
          <h2 class="section-title">Des Formules Pour Tous Vos Besoins</h2>
          <p class="section-intro">
            Découvrez nos différentes formules adaptées à vos envies et à votre budget
          </p>
        </div>
        
        <div class="pricing-panel animate-on-scroll">
          
          <div class="pricing-plan" 
               v-for="(plan, index) in pricingPlans" 
               :key="index"
               :class="{'featured': plan.featured}">
            <div class="plan-badge" v-if="plan.badge">{{ plan.badge }}</div>
            <div class="plan-image">
              <img :src="plan.image" :alt="plan.title" class="pricing-img" />
            </div>
            <h3 class="plan-title">{{ plan.title }}</h3>
            <ul class="plan-features">
              <li v-for="(feature, i) in plan.features" :key="i" class="plan-feature">
                {{ feature }}
              </li>
            </ul>
            <div class="plan-price">
              <span class="currency">FCFA</span>
              <span class="amount">{{ plan.price.toLocaleString() }}</span>
            </div>
            <a :href="plan.link" class="plan-button" :class="{'featured-button': plan.featured}">
              Réserver
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricingPlans = [
  {
    title: "Flash",
    price: 10000,
    features: [
      "5 heures de temps",
      "Cadre intime et chaleureux",
      "Garage privé inclus"
    ],
    image: "/flash.svg",
    link: "#reservation",
    badge: "",
    featured: false
  },
  {
    title: "Nuitée",
    price: 17000,
    features: [
      "De 12H à 12H",
      "Tout confort premium",
      "L'électricité est à votre charge"
    ],
    image: "/nuitée.svg",
    link: "#reservation",
    badge: "Populaire",
    featured: true
  },
  {
    title: "Anniversaire",
    price: 15000,
    features: [
      "5 heures de temps",
      "Décoration spéciale",
      "Ambiance festive"
    ],
    image: "/annif.svg",
    link: "#reservation",
    badge: "",
    featured: false
  }
];
</script>

<style scoped lang="scss">
.tarifs-section {
  padding: 6rem 0;
  background-color: white;
  position: relative;
}

.tarifs-background {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
    background-color: #e51919;
    z-index: 0;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.section-header {
  margin-bottom: 3.5rem;
  color: white;
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
    background-color: white;
  }
}

.section-intro {
  max-width: 600px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
}

.pricing-panel {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.pricing-plan {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
  
  &.featured {
    transform: translateY(-20px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border: 2px solid #e51919;
    z-index: 2;
    
    &:hover {
      transform: translateY(-25px) scale(1.05);
    }
  }
}

.plan-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e51919;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
}

.plan-image {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  img {
    height: 100%;
    width: auto;
  }
}

.plan-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.plan-feature {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
  font-size: 0.95rem;
  
  &:last-child {
    border-bottom: none;
  }
}

.plan-price {
  margin-bottom: 2rem;
  
  .currency {
    display: block;
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 0.25rem;
  }
  
  .amount {
    font-size: 2.2rem;
    font-weight: 700;
    color: #e51919;
  }
}

.plan-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  background-color: #f3f3f3;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #eaeaea;
  }
  
  &.featured-button {
    background-color: #e51919;
    color: white;
    
    &:hover {
      background-color: #d31717;
    }
  }
}

// Media queries
@media (max-width: 992px) {
  .pricing-plan {
    min-width: 250px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .tarifs-section {
    padding: 4rem 0;
  }
  
  .pricing-panel {
    flex-direction: column;
    align-items: center;
  }
  
  .pricing-plan {
    width: 100%;
    max-width: 400px;
    margin-bottom: 3rem;
    
    &.featured {
      transform: translateY(0) scale(1);
      order: -1;
      
      &:hover {
        transform: translateY(-10px) scale(1);
      }
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>