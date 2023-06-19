<template>
  <main>
    <h1>Pannel Administrateur</h1>
    <main v-if="isConnected">
      <section>
        <h2>Gestion des commandes</h2>
        <table>
          <thead>
            <tr>
              <th>Numéro de commande</th>
              <th>Date</th>
              <th>Prix total</th>
              <!-- <th>Modifier</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.orderDate }}</td>
              <td>{{ item.totalPrice }}€</td>
              <!-- <td>
              <router-link :to="'/admin/updateProduct/' + item.id" class="btn"
                >Modifier</router-link
              >
            </td> -->
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
    <div v-else class="product-form">
      <input
        v-model="email"
        placeholder="myLovelyAvocado@avocado-home.fr"
        type="email"
      />
      <input v-model="password" placeholder="avocadoLove" type="password" />
      <button @click="login">Se connecter</button>
    </div>
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
      email: "avocado@love.fr",
      password: "avocat",
    };
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
  },
  mounted() {
    this.fetchProducts();
    this.fetchOrders();
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8888/login.php", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.data.success) {
            this.$store.commit("setIsConnected", true);
          } else {
            // alert("Mauvais identifiants");
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
