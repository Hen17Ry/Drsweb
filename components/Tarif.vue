<template>
    <section>
        <div class="background">
            <div class="container">
                <div class="panel pricing-table">
                
                <div class="pricing-plan">
                    <img src="/flash.svg" alt="" class="pricing-img">
                    <h2 class="pricing-header">Flash</h2>
                    <ul class="pricing-features">
                    <li class="pricing-features-item">5H de temps</li>
                    <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
                    </ul>
                    <span class="pricing-price">10.000 FCFA</span>
                    <a href="#/" class="pricing-button">Réserver</a>
                </div>
                
                <div class="pricing-plan">
                    <img src="/public/nuitée.svg" alt="" class="pricing-img">
                    <h2 class="pricing-header">Nuitée</h2>
                    <ul class="pricing-features">
                    <li class="pricing-features-item">De 12H à 12H</li>
                    <li class="pricing-features-item">L'électricité est à votre charge</li>
                    </ul>
                    <span class="pricing-price">17.000 FCFA</span>
                    <a href="#/" class="pricing-button is-featured">Réserver</a>
                </div>
                
                <div class="pricing-plan">
                    <img src="/public/annif.svg" alt="" class="pricing-img">
                    <h2 class="pricing-header">Anniverssaire</h2>
                    <ul class="pricing-features">
                    <li class="pricing-features-item">5H de temps</li>
                    <li class="pricing-features-item">Simple horizontal scalability</li>
                    </ul>
                    <span class="pricing-price">15.000 FCFA</span>
                    <a href="#/" class="pricing-button">Réserver</a>
                </div>
                
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

        section {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        }

        *, *:before, *:after {
        box-sizing: inherit;
        }

        .background {
        padding: 0 25px 25px;
        position: relative;
        width: 100%;
        }

        .background::after {
        content: '';
        background: #ff3e3e;
        background: -moz-linear-gradient(top, #ff3e3e 0%, #ff3e3e 100%);
        background: -webkit-linear-gradient(top, #ff3e3e 0%,#ff3e3e 100%);
        background: linear-gradient(to bottom, #ff3e3e 0%,#ff3e3e 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
        height: 350px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
        }

        @media (min-width: 900px) {
        .background {
            padding: 0 0 25px;
        }
        }

        .container {
        margin: 0 auto;
        padding: 50px 0 0;
        max-width: 960px;
        width: 100%;
        }

        .panel {
        background-color: #fff;
        border-radius: 10px;
        padding: 15px 25px;
        position: relative;
        width: 100%;
        z-index: 10;
        }

        .pricing-table {
        box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
        display: flex;
        flex-direction: column;
        }

        @media (min-width: 900px) {
        .pricing-table {
            flex-direction: row;
        }
        }

        .pricing-table * {
        text-align: center;
        text-transform: uppercase;
        }

        .pricing-plan {
        border-bottom: 1px solid #ebd8d8e0;
        padding: 25px;
        }

        .pricing-plan:last-child {
        border-bottom: none;
        }

        @media (min-width: 900px) {
        .pricing-plan {
            border-bottom: none;
            border-right: 1px solid #ebd8d8e0;
            flex-basis: 100%;
            padding: 25px 50px;
        }

        .pricing-plan:last-child {
            border-right: none;
        }
        }

        .pricing-img {
        margin-bottom: 25px;
        max-width: 100%;
        }

        .pricing-header {
        color: #888;
        font-weight: 600;
        letter-spacing: 1px;
        }

        .pricing-features {
        color: #ff3e3e;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 50px 0 25px;
        }

        .pricing-features-item {
        border-top: 1px solid #e1f1ff;
        font-size: 12px;
        line-height: 1.5;
        padding: 15px 0;
        }

        .pricing-features-item:last-child {
        border-bottom: 1px solid #e1f1ff;
        }

        .pricing-price {
        color: #ff3e3e;
        display: block;
        font-size: 32px;
        font-weight: 700;
        }

        .pricing-button {
        border: 1px solid #d88383;
        border-radius: 10px;
        color: #ff3e3e;
        display: inline-block;
        margin: 25px 0;
        padding: 15px 35px;
        text-decoration: none;
        transition: all 150ms ease-in-out;
        }

        .pricing-button:hover,
        .pricing-button:focus {
        background-color: #e1f1ff;
        }

        .pricing-button.is-featured {
        background-color: #ff3e3e;
        color: #fff;
        }

        .pricing-button.is-featured:hover,
        .pricing-button.is-featured:active {
        background-color: #ff3e3e;
        }

</style>