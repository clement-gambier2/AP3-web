<template>
  <main>
    <section class="parent">
      <ProductCard
        v-for="item in products"
        :name="item.name"
        :price="item.price"
        :picture="item.picture"
      />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [], // Variable pour stocker les données récupérées
    };
  },
  mounted() {
    this.fetchProducts(); // Appel de la méthode pour récupérer les produits lors du montage du composant
  },
  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:8888/products.php") // Remplacez l'URL par l'URL de votre API
        .then((response) => {
          this.products = response.data; // Stockage des données dans la variable "products"
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}
</style>
