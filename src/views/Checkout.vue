<template>
  <main>
    <h1 class="mexican-title">Récapitulatif de commande</h1>
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td id="name-align">
            {{ item.name }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="#e63946"
              @click="removeFromCart(item.id)"
            >
              <path
                d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"
              />
            </svg>
          </td>
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
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>{{ cartTotalPrice }}€</td>
        </tr>
      </tfoot>
    </table>

    <div class="payment-buttons">
      <button class="pay-now-button" @click="submitForm()">
        Payer maintenant
      </button>
      <button class="continue-shopping-button">
        <router-link to="/products">Continuer les achats</router-link>
      </button>
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
        .post(`http://localhost:8888/router.php`, {
          route: "addOrder",
          total: this.cartTotalPrice,
        })
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
#name-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
