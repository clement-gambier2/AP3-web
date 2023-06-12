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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Avocat frais</td>
          <td>$2.99</td>
          <td>2</td>
          <td>$5.98</td>
        </tr>
        <tr>
          <td>Avocat huile</td>
          <td>$9.99</td>
          <td>1</td>
          <td>$9.99</td>
        </tr>
        <tr>
          <td colspan="3">Total</td>
          <td>$15.97</td>
        </tr>
      </tbody>
    </table>

    <div class="payment-buttons">
      <button class="pay-now-button">Payer maintenant</button>
      <button class="continue-shopping-button">Continuer les achats</button>
    </div>
  </main>
</template>

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
