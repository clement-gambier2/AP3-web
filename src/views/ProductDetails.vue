<template>
  <main class="product-details">
    <img :src="product.picture" alt="Product 1" />
    <h1 class="product-name">{{ product.name }}</h1>
    <p class="product-price">{{ product.price }}€</p>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-quantity">Quantité disponible: {{ product.quantity }}</p>
    <div class="btn" @click="addToCart()">Ajouter au panier</div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductCard",
  props: {
    id: String,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addToCart() {
      let addProduct = {
        id: this.id,
        name: this.product.name,
        price: this.product.price,
        picture: this.product.picture,
      };
      this.$store.dispatch("addToCart", addProduct);
      console.log("add to cart");
    },
    fetchProduct() {
      axios
        .get(
          `http://localhost:8888/uniqueProduct.php/?id=${this.$route.params.id}`
        )
        .then((response) => {
          console.log(response.data);
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-details {
  text-align: center;
}

.product-name {
  font-size: 24px;
  margin-top: 10px;
}

.product-price {
  font-size: 18px;
  margin-top: 5px;
}

.product-description {
  font-size: 16px;
  margin-top: 10px;
}

.product-quantity {
  font-size: 16px;
  margin-top: 5px;
}

img {
  width: 300px;
  height: auto;
  margin-top: 20px;
}
</style>
