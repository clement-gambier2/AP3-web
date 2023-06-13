<template>
  <main>
    <h1>Pannel Administrateur</h1>
    <section>
      <h2>Gestion des commandes</h2>
      <table>
        <thead>
          <tr>
            <th>Numéro de commande</th>
            <th>Date</th>
            <th>Prix total</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.orderDate }}</td>
            <td>{{ item.totalPrice }}€</td>
            <td>
              <router-link :to="'/admin/updateProduct/' + item.id" class="btn"
                >Modifier</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Gestion des produits</h2>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Image</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}€</td>
            <td>{{ item.quantity }}</td>
            <td><img :src="item.picture" alt="" /></td>
            <td>
              <router-link :to="'/admin/updateProduct/' + item.id" class="btn"
                >Modifier</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPanel",
  data() {
    return {
      products: [],
      orders: [],
    };
  },
  mounted() {
    this.fetchProducts();
    this.fetchOrders();
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
    fetchOrders() {
      axios
        .get("http://localhost:8888/orders.php")
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
td > img {
  width: 100px;
  height: auto;
}

th {
  background-color: #f2f2f2;
}

tfoot td {
  font-weight: bold;
}

.payment-buttons {
  text-align: center;
  margin-top: 20px;
}

.payment-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
}

.pay-now-button {
  background-color: #4caf50;
  color: white;
  border: none;
}

.continue-shopping-button {
  background-color: #f2f2f2;
  color: #333;
  border: none;
}
</style>
