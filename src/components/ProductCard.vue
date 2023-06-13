<template>
  <div class="product-card">
    <img :src="picture" alt="Product 1" />
    <h3>{{ name }} {{ id }}</h3>
    <p>Prix : {{ price }}€</p>
    <div class="btn" @click="addToCart()">Ajouter au panier</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductCard",
  props: {
    name: String,
    price: String,
    picture: String,
    id: String,
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    fetchProduct(id) {
      axios
        .get(`http://localhost:8888/uniqueProduct.php/?id=${id}`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart() {
      let addProduct = {
        id: this.id,
        name: this.name,
        price: this.price,
        picture: this.picture,
      };
      this.$store.dispatch("addToCart", addProduct);
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  border-radius: 25px;
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
</style>
