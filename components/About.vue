<template>
    <section class="about-section">
        <div class="container">
            <div class="content-wrapper">
                <!-- Colonne gauche -->
                <div class="left-content">
                    <h6 class="sub-title">À propos de nous</h6>
                    <h2 class="main-title">Vivez Un Séjour <br> Inoubliable Avec DRS <br> Guest House</h2>
                    <p class="description">
                        Bienvenue à <strong>DRS Guest House</strong>, une résidence d’exception où confort et praticité
                        s’allient pour répondre à vos besoins. Nous proposons des studios meublés élégants, chacun équipé d’un
                        garage privé, idéal pour vos séjours de courte ou longue durée, qu’ils soient professionnels ou personnels.
                    </p>
                    <p class="description">
                        Profitez d’un cadre moderne et chaleureux, conçu pour offrir une expérience unique. Nos tarifs flexibles
                        s’adaptent à toutes les occasions, que ce soit pour un week-end détente, un voyage d’affaires, ou des
                        événements spéciaux. Chez DRS Guest House, nous mettons un point d’honneur à rendre votre séjour
                        mémorable.
                    </p>

                    <!-- Grille d'images -->
                    <div class="image-grid">
                        <img src="public/drs/5.jpg" alt="Salon" />
                        <img src="public/drs/1.jpg" alt="Chambre 1" />
                        <img src="public/drs/9.jpg" alt="Chambre 2" />
                    </div>
                </div>

                <!-- Colonne droite -->
                <div class="right-image">
                    <div class="video-thumbnail">
                        <img src="public/drs/2.jpg" alt="Vidéo présentation" />
                        <a href="https://youtu.be/X66tNMH7Q7A" target="_blank" class="play-button">
                        <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
</script>


<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
   @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.about-section {
  padding: 80px 20px;
  background: #fff;
}

.about-section .container {
  max-width: 1200px;
  margin: auto;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 40px;
}

.left-content {
  flex: 1 1 55%;
}

.right-image {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
}

.sub-title {
  color: #ff3e3e;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.main-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.3;
}

.description {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 20px;
}

/* Grille d'images responsive horizontale */
.image-grid {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  overflow-x: auto;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
}

.image-grid img {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
  scroll-snap-align: start;
}

.image-grid img:hover {
  transform: scale(1.05);
}

/* Vidéo miniature */
.video-thumbnail {
  position: relative;
  max-width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
  color: #fff;
  padding: 20px;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  transition: background 0.3s ease;
}

.play-button:hover {
  background: #e60000;
}

/* Responsive pour tablettes */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .left-content, .right-image {
    flex: 1 1 100%;
  }

  .main-title {
    font-size: 26px;
  }

  .image-grid {
    justify-content: flex-start;
  }

  .image-grid img {
    width: 160px;
    height: 160px;
  }

  .play-button {
    padding: 18px;
    font-size: 20px;
  }
}

/* Responsive pour mobiles */
@media (max-width: 600px) {
  .main-title {
    font-size: 22px;
  }

  .description {
    font-size: 14px;
  }

  .image-grid img {
    width: 130px;
    height: 130px;
  }

  .play-button {
    padding: 15px;
    font-size: 18px;
  }
}

</style>