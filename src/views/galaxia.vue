<template>
    <div class="container">
        <div class="row">
            <!--Primer Carrusel-->
            <div class="col-md-12">
                <div id="CarouselGalaxia" class="carousel slide carousel-fade w-100">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#CarouselGalaxia" data-bs-slide-to="0"></button>
                        <button type="button" data-bs-target="#CarouselGalaxia" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#CarouselGalaxia" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#CarouselGalaxia" data-bs-slide-to="3" class="active"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="/src/assets/img/Galaxia1.jpg" class="d-block w-100" height="400">
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/img/Galaxia2.jpg" class="d-block w-100" height="400">
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/img/Galaxia3.jpg" class="d-block w-100" height="400">
                        </div>
                        <div class="carousel-item active">
                            <img src="/src/assets/img/Galaxia4.jpg" class="d-block w-100" height="400">
                        </div>
                    </div>

                    <!--controles-->
                    <button class="carousel-control-prev" type="button" data-bs-target="#CarouselGalaxia" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#CarouselGalaxia" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>