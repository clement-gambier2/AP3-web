<template>
  <main>
    <h2>Détail de produit</h2>
    <span class="line"></span>
    <section class="product-details">
      <aside>
        <img
          :src="product.picture"
          alt="Product 1"
          class="go-up"
          :class="{ animated: animateImage }"
        />
      </aside>
      <aside>
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">{{ product.price }}€</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-quantity">
          Quantité disponible: {{ product.quantity }}
        </p>
        <div class="btn" @click="addToCart()">Ajouter au panier</div>
      </aside>
    </section>
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
      animateImage: false,
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
    },
    fetchProduct() {
      axios
        .post("http://s3-4959.nuage-peda.fr/eval/router.php/", {
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
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  align-items: center;
}
aside {
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
  transition: transform 10s infinite linear;
}

.animated {
  animation-name: infiniteMovement;
}

@keyframes infiniteMovement {
  0% {
    transform: translateX(-50%) translateY(-50%);
  }
  50% {
    transform: translateX(50%) translateY(50%);
  }
  100% {
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
