<template>
  <nav>
    <h1>Avocado Home</h1>
    <div>
      <router-link to="/">Accueil</router-link>
      <a href="#"></a>
      <router-link to="/products">Nos produits</router-link>
      <router-link to="/about">A propos</router-link>
      <router-link to="/checkout">Votre panier</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  padding-bottom: 2.5%;
}
</style>
