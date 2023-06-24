<template>
  <div class="product-form">
    <input v-model="product.name" placeholder="Nom du produit" type="text" />
    <input v-model="product.price" placeholder="Prix" type="number" />
    <textarea
      v-model="product.description"
      placeholder="Description du produit"
      type="text"
    ></textarea>
    <input v-model="product.picture" placeholder="Image" type="text" />
    <input v-model="product.quantity" placeholder="Quantité" type="number" />
    <button @click="submitForm">Modifier le produit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPanel",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        picture: "",
        quantity: "",
      },
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      axios
        .post("https://s3-4959.nuage-peda.fr/eval/router.php/", {
          route: "uniqueProduct",
          id: this.$route.params.id,
        })
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitForm() {
      axios
        .put(`https://s3-4959.nuage-peda.fr/eval/router.php`, {
          route: "updateProduct",
          product: this.product,
        })
        .then((response) => {
          console.log(response.data); // Affiche la réponse de l'API
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin: 0 auto;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
