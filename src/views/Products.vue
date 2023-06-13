<template>
  <main>
    <h2>Nos produits</h2>
    <section class="parent">
      <ProductCard
        v-for="item in products"
        :name="item.name"
        :price="item.price"
        :picture="item.picture"
        :id="item.id"
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
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:8888/products.php")
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
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}
</style>
