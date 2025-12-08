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

function reduce(btn) {
    let card = btn.parentElement.parentElement.parentElement;
    let quantitySpan = card.querySelector('.item-quantity-number');
    let price = Number(card.querySelector('.item-price-number').innerText)
    if(quantitySpan.innerText > 1){
        quantitySpan.innerText -= 1;
        card.querySelector('.item-total-price').innerText -= price;
        document.getElementById('totalItems').innerText--;
        document.getElementById('grandTotal').innerText -= price;
    }
}

function add(btn){
    let card = btn.parentElement.parentElement.parentElement;
    let price = Number(card.querySelector('.item-price-number').innerText)
    card.querySelector('.item-quantity-number').innerText++;
    card.querySelector('.item-total-price').innerText = Number(card.querySelector('.item-total-price').innerText) + price;
    document.getElementById('totalItems').innerText++;
    document.getElementById('grandTotal').innerText = Number(document.getElementById('grandTotal').innerText) + price;
}

function removeItem(btn) {
    let card = btn.parentElement.parentElement;
    let totalItems = document.getElementById('totalItems')
    document.getElementById('grandTotal').innerText -= Number(card.querySelector('.item-total-price').innerText);
    totalItems.innerText -= Number(card.querySelector('.item-quantity-number').innerText);
    card.innerHTML = ''
    card.classList.add('remove');
    setTimeout(()=>card.remove(), 500);
    if(totalItems.innerText == 0){
        setTimeout(function (){
        document.getElementById('cart-list').style.display = 'none';
        document.getElementById('bill').style.display = 'none';
        document.getElementById('empty-cart-message').style.display = 'flex';
        }, 500)
    }
}