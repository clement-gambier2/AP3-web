<template>
  <main>
    <h2 class="mexican-title">Nos produits</h2>
    <span class="line"></span>
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
        .get("https://s3-4959.nuage-peda.fr/eval/router.php?route=products")
        // .get("http://s3-4959.nuage-peda.fr/eval/router.php?route=products")
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
