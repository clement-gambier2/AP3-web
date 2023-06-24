<template>
  <div>
    <h1>Comment mon site a été réalisé</h1>
    <h2>Front-end en Vue.js</h2>
    <p>
      Mon site a été développé en utilisant Vue.js, un framework JavaScript
      moderne pour la création d'interfaces utilisateur.
    </p>

    <h2>Back-end : API en PHP</h2>
    <p>
      Le back-end de mon site a été construit avec une API en PHP, qui gère les
      interactions avec la base de données et fournit les données nécessaires au
      front-end.
    </p>

    <h2>Fonctionnalités</h2>
    <h3>Récupérer tous les produits</h3>
    <p>
      Vous pouvez récupérer la liste complète des produits disponibles sur votre
      site en effectuant une requête à l'API.
    </p>

    <h3>Avoir le détail d'un produit</h3>
    <p>
      En cliquant sur un produit, vous pouvez accéder à sa page de détail pour
      obtenir plus d'informations.
    </p>

    <h3>Ajouter un produit au panier</h3>
    <p>
      Sur la page du produit, vous avez la possibilité d'ajouter ce produit à
      votre panier en cliquant sur un bouton approprié.
    </p>
    <p>
      Le système de panier est géré côté client en utilisant un store JavaScript
      qui stocke les informations sur les produits sélectionnés et les quantités
      associées.
    </p>

    <h3>Passer une commande</h3>
    <p>
      Une fois que vous avez ajouté des produits à votre panier, vous pouvez
      passer une commande.
    </p>

    <h3>Se connecter au panneau admin</h3>
    <p>
      Les administrateurs du site peuvent se connecter à un panneau
      d'administration dédié pour gérer les produits et les commandes.
    </p>

    <h3>Voir toutes les commandes</h3>
    <p>
      Dans le panneau admin, vous pouvez accéder à une liste de toutes les
      commandes passées sur le site.
    </p>

    <h3>Voir tous les produits</h3>
    <p>
      Le panneau admin affiche également la liste complète de tous les produits
      disponibles, avec des options de modification.
    </p>

    <h3>Modifier un produit</h3>
    <p>
      Les administrateurs ont la possibilité de modifier les détails d'un
      produit existant via le panneau admin.
    </p>

    <h3>Ajouter un produit</h3>
    <p>Les administrateurs ont la possibilité de créer de nouveaux produits.</p>
  </div>
</template>

<script>
export default {
  name: "My Work",
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  color: #555;
  margin-top: 30px;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  color: #777;
  margin-top: 25px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #888;
  line-height: 1.6;
}
</style>
