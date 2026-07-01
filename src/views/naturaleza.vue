<template>
<div class="container">
    <div class="row">
    <!-- Primer carrusel -->
    <div class="col-md-6">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade w-100">
    <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="active"></button>
    </div>

        <div class="carousel-inner">
            <div class="carousel-item">
                <img src="/src/assets/img/bosque1.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/img/bosque2.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/img/bosque3.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item active">
                <img src="/src/assets/img/bosque4.jpg" class="d-block w-100" height="400">
            </div>
        </div>

        <!-- Controles -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>

        </div>
    </div> <!-- 👈 CERRAR AQUÍ -->

    <!-- Segundo carrusel -->
    <div class="col-md-6">
        <div id="carousel2" class="carousel slide carousel-fade w-100">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="3" class="active"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item">
                <img src="/src/assets/img/flores1.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/img/flores2.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="/src/assets/img/flores3.jpg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item active">
                <img src="/src/assets/img/flores4.jpg" class="d-block w-100" height="400">
            </div>
        </div>
        <!-- Controles -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
        </div>
    </div>
    </div>
</div>
</template>