const products = [
  { id:1, name:"Crop Top Bloom", price:32.99, img:"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=60" },
  { id:2, name:"Jogger Tie-Dye", price:49.99, img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=60" },
  { id:3, name:"Bralette Triangle", price:24.99, img:"https://images.unsplash.com/photo-1617114919956-96545c029974?auto=format&fit=crop&w=600&q=60" },
  { id:4, name:"Tote Bag YABA", price:18.99, img:"https://images.unsplash.com/photo-1595341595379-cf1cd0fb7fb1?auto=format&fit=crop&w=600&q=60" }
];

const list = document.getElementById('product-list');
products.forEach(p=>{
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>$${p.price.toFixed(2)} CAD</p>
    <button onclick="addToCart(${p.id})">Ajouter</button>
  `;
  list.appendChild(div);
});

let cart = [];
function addToCart(id){
  cart.push(id);
  document.getElementById('cart-count').textContent = cart.length;
  alert("Ajouté au panier !");
}