let cartCount = 0;
const cartCountDisplay = document.getElementById('cartCount');


const addButtons = document.querySelectorAll('.addBtn');
const removeButtons = document.querySelectorAll('.removeBtn');


addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    updateCartCount();
  });
});


removeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (cartCount > 0) {
      cartCount--;
      updateCartCount();
    }
  });
});


function updateCartCount() {
  cartCountDisplay.innerText = `Cart Items: ${cartCount}`;
}

