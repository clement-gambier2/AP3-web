<template>
  <div class="product-form">
    <section class="container">
      <div>
        <h3>Nom du produit</h3>
        <input
          v-model="product.name"
          placeholder="Nom du produit"
          type="text"
        />
      </div>
      <div>
        <h3>Prix</h3>
        <input
          v-model="product.price"
          placeholder="Prix"
          type="number"
          min="1"
        />
      </div>
    </section>
    <h3>Quantité</h3>
    <input
      v-model="product.quantity"
      placeholder="Quantité"
      type="number"
      min="1"
    />
    <h3>Description</h3>
    <textarea
      v-model="product.description"
      placeholder="Description du produit"
      type="text"
    ></textarea>
    <h3>Image</h3>
    <div>
      <input v-model="product.picture" placeholder="Image" type="text" />
      <img v-if="product.picture !== ''" :src="product.picture" alt="" />
    </div>

    <button @click="submitForm">Ajouter le produit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "Produit",
        price: "10",
        description: "Un super produit",
        picture:
          "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        quantity: "30",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post(`http://s3-4959.nuage-peda.fr/eval/router.php/`, {
          route: "addProduct",
          product: this.product,
        })
        .then((response) => {
          console.log(response.data);
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

.container {
  display: flex;
  flex-direction: row;
}
.container > div {
  margin-right: 50px;
}
</style>
