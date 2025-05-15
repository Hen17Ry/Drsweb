<template>
    <section class="appartments-section" id="menu">
      <div class="container">
        <div class="heading">
          <h6>Gallery</h6>
          <h2>Nos Appartements</h2>
        </div>
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="{ animationDuration: `${appartements.length * 6}s` }">
            <div
              v-for="(item, index) in [...appartements, ...appartements]"
              :key="index"
              class="card"
              :style="{ backgroundImage: `url(${item.image})` }"
            >
              <div class="overlay" />
              <div class="card-content">
                <h1 class="title">{{ item.nom }}</h1>
                <div class="description">
                  <p v-html="item.description" />
                  <NuxtLink to="#reservation" class="btn">Faire une réservation</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
   
    const appartements = [
      {
        numero: '01',
        nom: 'ROMANCE',
        description:
          'Vivez ici une ambiance de <strong>ROMANCE</strong> et laissez-vous transportez dans un monde de passion !',
        image: '/drs/1.jpg',
      },
      {
        numero: '02',
        nom: 'JOUVENCE',
        description:
          'Cet endroit est une fontaine de <strong>JOUVENCE</strong> qui vous procure un rajeunissement éternel !',
        image: '/drs/2.jpg',
      },
      {
        numero: '03',
        nom: 'BONHEUR',
        description:
          'Vous êtes ici au coeur d\'un havre de joie et de tendresse. Imprégnez-vous de l\'aura lumineuse du <strong>BONHEUR !</strong>',
        image: '/drs/10.jpg',
      },
      {
        numero: '04',
        nom: 'AMOUR',
        description:
          'Dans cette chambre, chaque instant devient une éternité. Laissez-vous emporter par la magie de l\'<strong>AMOUR</strong>.',
        image: '/drs/14.jpg',
      },
      {
        numero: '05',
        nom: 'DESIRS',
        description:
          'Sentez ce parfum mystique qui vous envoûte et vous plonge dans vos <strong>DESIRS</strong> les plus brûlants !',
        image: '/drs/18.jpg',
      },
    ]

</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    .appartments-section {
    padding: 60px 20px;
    background: #ffffff;
    }

    .appartments-section .container .heading {
    text-align: center;
    margin-bottom: 40px;
    }

    .appartments-section .container .heading h6 {
    color: #ff5757;
    font-size: 16px;
    margin-bottom: 8px;
    letter-spacing: 1px;
    }

    .appartments-section .container .heading h2 {
    font-size: 36px;
    font-weight: 600;
    }

    .appartments-section .container .carousel-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 60px 0;
    background: #ffffff;
    }

    .appartments-section .container .carousel-wrapper .carousel-track {
    display: flex;
    width: max-content;
    animation: scroll-left linear infinite;
    }

    @keyframes scroll-left {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card {
    position: relative;
    width: 400px;
    height: 500px;
    margin: 0 15px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 8px 24px rgba(235, 6, 6, 0.274);
    cursor: pointer;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card .card-content .title {
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card .card-content .description {
    background: #e60000;
    padding: 15px;
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card:hover  .description {
    transform: translateY(0);
    opacity: 1;
    }

    .appartments-section .container .carousel-wrapper .carousel-track .card .card-content .description .btn {
    display: inline-block;
    margin-top: 10px;
    background: #ffffff;
    color: #e60000;
    padding: 8px 14px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
    margin-bottom: 10px;
    }
</style>