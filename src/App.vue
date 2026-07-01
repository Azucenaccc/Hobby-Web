<script setup>
import principal from './components/pincipal.vue'
</script>

<template>
  <nav class="principal navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-4 border-bottom border-body" data-bs-theme="dark">
        <h3 class="m-2 text-info fw-bold"><strong>Mis pasatiempos favoritos</strong></h3>
        <ul class="menu d-flex gap-4 list-unstyled m-0 ms-auto">
            <li><router-link class="nav-link-custom" to="/naturaleza">Naturaleza</router-link></li>
            <li><router-link class="nav-link-custom" to="/galaxia">Galaxia</router-link></li>
            <li><router-link class="nav-link-custom" to="/musica">Musica</router-link></li>
            <li><router-link class="nav-link-custom" to="/arte">Arte</router-link></li>
        </ul>
    </nav>
  <div>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>
<style scoped>
.principal{
    background: linear-gradient(90deg,#0f172a,#1e293b)
}

.nav-link-custom{
    color:white;
    text-decoration:none;
    font-weight:500;
    transition:0.3s;
    position:relative;
}
.nav-link-custom::after{
    content:"";
    position:absolute;
    left:0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: #38bdf8;
    transition: 0.3s;
}
.nav-link-custom:hover::after{
    width: 100%;
}

.router-link-active{
    color:#38bdf8;
    font-weight: bold;
}
</style>
