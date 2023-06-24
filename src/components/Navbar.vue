<template>
  <nav>
    <h1>Avocado Home</h1>
    <div>
      <router-link to="/">Accueil</router-link>
      <router-link to="/products">Nos produits</router-link>
      <router-link to="/about">A propos</router-link>
      <router-link to="/checkout">Votre panier</router-link>
      <router-link to="/admin" class="admin-btn">Espace Admin</router-link>
      <a v-if="this.$store.getters.isConnected" @click="logout()">
        Se déconnecter
      </a>
      <router-link to="/work" class="admin-btn">Travail</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
nav {
  padding-bottom: 2.5%;
}
.admin-btn {
  background-color: #f5f5f5;
  color: #000;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

nav > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20%;
}

nav > div > a {
  font-size: 16px;
  font-weight: bold;
}

h1 {
  font-family: "Kablammo", cursive;
  font-size: 45px;
  background-color: var(--rust);
  background-image: linear-gradient(
    90deg,
    var(--green),
    var(--rust),
    var(--floral-white)
  );

  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
