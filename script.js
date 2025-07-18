// Panier YABA
let cartItems=[];

function addToCart(name,price){
  const existing=cartItems.find(i=>i.name===name);
  if(existing){existing.quantity+=1;}
  else{cartItems.push({name,price,quantity:1});}
  updateCart();
}

function updateCart(){
  document.getElementById('cart-count').textContent=cartItems.reduce((s,i)=>s+i.quantity,0);
  const list=document.getElementById('cart-items');
  list.innerHTML='';
  let total=0;
  cartItems.forEach(i=>{
    total+=i.price*i.quantity;
    const li=document.createElement('li');
    li.textContent=`${i.name} – ${i.quantity} × $${i.price.toFixed(2)} CAD`;
    list.appendChild(li);
  });
  document.getElementById('cart-total').textContent=total.toFixed(2)+' $ CAD';
}

function openCart(){document.getElementById('panier').style.display='flex';}
function closeCart(){document.getElementById('panier').style.display='none';}
document.getElementById('cart-link').addEventListener('click',e=>{e.preventDefault();openCart();});

function checkout(){
  if(cartItems.length===0){alert('Votre panier est vide !');return;}
  alert('Merci pour votre achat ! (Simulation de paiement)');
  cartItems=[];
  updateCart();
  closeCart();
}

// Tableau des mois en français
const mois=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
