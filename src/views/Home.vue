<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <div>
          <h2 class="subtitle">Welcome to</h2>
          <h2 class="title">Avocado Home</h2>
        </div>
        <p>Découvrez notre sélection d'avocats</p>
        <p>Des produits frais et savoureux pour tous les amateurs d'avocat.</p>
        <router-link to="/products" class="btn">Voir les produits</router-link>
      </div>

      <img src="../assets/avocado-home.png" alt="" />
    </section>
    <section class="featured-products">
      <h2 class="mexican-title">Nos produits phares</h2>
      <div class="product-list">
        <ProductCard
          v-for="item in products"
          :key="item.id"
          :name="item.name"
          :price="item.price"
          :picture="item.picture"
        />
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:8888/router.php?route=productSelection")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: var(--rust);
}
.subtitle {
  font-family: "Kablammo", cursive;
  font-size: 40px;
  text-shadow: -7px 7px 0px #fff;
  color: var(--green);
}

.title {
  font-family: "Kablammo", cursive;
  font-size: 90px;
  text-shadow: -7px 7px 0px #fff;
}

/* Section hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 5%;
  background: linear-gradient(to right, var(--flax), var(--floral-white));
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.hero-content {
  text-align: center;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
}

/* Section produits phares */
.featured-products {
  background-color: var(--green);
  padding: 40px 0;
  text-align: center;
}

.featured-products h2 {
  margin-bottom: 30px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
