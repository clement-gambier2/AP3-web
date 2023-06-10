<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <h2>Découvrez notre sélection d'avocats</h2>
        <p>Des produits frais et savoureux pour tous les amateurs d'avocat.</p>
        <router-link to="/products" class="btn">Voir les produits</router-link>
      </div>
      <img
        src="../assets/avocado-hero.avif"
        alt="Avocado Hero"
        class="hero-image"
      />
    </section>
    <section class="featured-products">
      <h2>Nos produits phares</h2>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: var(--rust);
}

a {
  color: var(--dark-goldenrod);
  text-decoration: none;
}

a:hover {
  color: var(--green);
}

/* En-tête */
header {
  background-color: var(--flax);
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

/* Section hero */
.hero {
  position: relative;
  text-align: center;
}

.hero h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
}

.hero-image {
  width: 25%;
  height: auto;
}

/* Section produits phares */
.featured-products {
  background-color: #fff;
  padding: 40px 0;
  text-align: center;
}

.featured-products h2 {
  margin-bottom: 30px;
}
</style>
