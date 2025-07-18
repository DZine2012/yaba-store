// Tableau pour stocker les articles du panier
let cartItems = [];

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
  // Vérifier si le produit existe déjà dans le panier
  let item = cartItems.find(item => item.name === productName);
  if (item) {
    // Si oui, augmenter la quantité
    item.quantity += 1;
  } else {
    // Sinon, ajouter un nouvel objet produit
    cartItems.push({ name: productName, price: price, quantity: 1 });
  }
  updateCartDisplay();
}

// Mettre à jour l'affichage du panier (compteur et liste)
function updateCartDisplay() {
  // Mettre à jour le compteur d'articles dans le menu
  const cartCountElem = document.getElementById('cart-count');
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElem.textContent = totalCount;

  // Mettre à jour la liste détaillée dans la modale panier
  const cartListElem = document.getElementById('cart-items');
  const cartTotalElem = document.getElementById('cart-total');
  cartListElem.innerHTML = '';  // on vide la liste
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity;
    // Créer un élément de liste pour chaque item
    const li = document.createElement('li');
    li.textContent = `${item.name} – ${item.quantity} × ${item.price.toFixed(2)} €`;
    cartListElem.appendChild(li);
  });
  // Mettre à jour le total
  cartTotalElem.textContent = totalPrice.toFixed(2) + ' €';
}

// Fonction pour ouvrir/afficher la modale du panier
function openCart() {
  const panierModal = document.getElementById('panier');
  panierModal.style.display = 'flex';
}

// Fonction pour fermer la modale du panier
function closeCart() {
  const panierModal = document.getElementById('panier');
  panierModal.style.display = 'none';
}

// Fonction pour simuler le paiement lors du clic sur "Payer"
function checkout() {
  if (cartItems.length === 0) {
    alert("Votre panier est vide !");
  } else {
    alert("Merci pour votre achat ! (Simulation de paiement)");
    // Réinitialiser le panier après paiement simulé
    cartItems = [];
    updateCartDisplay();
    closeCart();
  }
}

// Écouteur sur le lien "Panier" du menu pour ouvrir la modale
document.getElementById('cart-link').addEventListener('click', function(e) {
  e.preventDefault(); // empêcher le scroll/jump vers l'ancre
  openCart();
});
