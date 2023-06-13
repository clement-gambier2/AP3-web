<template>
  <main>
    <h1>Récapitulatif de commande</h1>
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}€</td>
          <td>
            <input
              v-model="item.quantity"
              placeholder="1"
              min="1"
              type="number"
              onchange="updateCartItemQuantity(item,item.quantity)"
            />
          </td>
          <td>{{ item.quantity * item.price }}€</td>
          <td>
            <button @click="removeFromCart(item.id)">
              Supprimer {{ item.id }}
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>{{ cartTotalPrice }}€</td>
          <td></td>
        </tr>
      </tfoot>
    </table>

    <div class="payment-buttons">
      <button class="pay-now-button" @click="submitForm()">
        Payer maintenant
      </button>
      <button class="continue-shopping-button">Continuer les achats</button>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartTotalPrice() {
      let cartTotalPrice = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        cartTotalPrice += this.cartItems[i].price * this.cartItems[i].quantity;
      }
      return cartTotalPrice;
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    submitForm() {
      axios
        .post(`http://localhost:8888/addOrder.php`, this.cartTotalPrice)
        .then((response) => {
          console.log(response.data);
          this.clearCart();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
input[type="number"] {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
}

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
