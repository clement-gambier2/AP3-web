<template>
  <main>
    <p>mes produits</p>
    <section class="parent">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Products",
  components: {
    ProductCard,
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
