let cartSection = document.getElementById('cart-section');
let overlay = document.getElementById('overlay');
let cartBtn = document.getElementById('cartBtn');
let cardsContainer = document.getElementById('food-cards-container');
let removeCartSection = document.getElementById('remove-cart-section-btn')
function cart() {
    cartSection.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cartRemove() {
    cartSection.style.transform = 'translateX(100%)';
    setTimeout(function (){
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    },300)
}

cartBtn.addEventListener('click', cart);
removeCartSection.addEventListener('click', cartRemove);
