<template>
  <div class="product-card">
    <img src="../assets/avocado1.avif" alt="Product 1" />
    <h3>Nom du produit</h3>
    <p>Prix : $19.99</p>
    <a href="#" class="btn">Ajouter au panier</a>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style scoped>
.product-card {
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-card h3 {
  margin: 0;
  font-size: 20px;
}

.product-card p {
  margin: 10px 0;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--saffron);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: var(--rust);
}
</style>
