let cartSection = document.getElementById('cart-section');
let overlay = document.getElementById('overlay');
let cartBtn = document.getElementById('cartBtn');
let cardsContainer = document.getElementById('food-cards-container');
let removeCartSection = document.getElementById('remove-cart-section-btn')

// menu loading
let foodcard;
for(let dish of foodmenu){
    foodcard = document.createElement('div')
    foodcard.className = 'restaurant-card';
    foodcard.innerHTML = `
       <div class="card-img-rating" style="background-image: url('${dish.img}');">
            <span class="restaurant-rating">⭐️ ${dish.rating}</span>
        </div>
        <div class="card-content">
            <h1 class="restaurant-name">${dish.name}</h1>
            <h3 class="restaurant-type">${dish.categories}</h3>
            <span class="restaurant-address">₹<span class="food-price">${dish.price}</span> for one</span>
        </div>
        <button class="card-view-menu" onclick="addToCart(this)">Add to cart</a>
        `
    cardsContainer.appendChild(foodcard);
}

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

function addToCart(btn){
    let card = btn.parentElement;
    let name = card.querySelector('.restaurant-name').innerText;
    let cartList = document.querySelectorAll('.item-name');
    cartBtn.style.backgroundColor = 'rgba(255,255,255,.5)';
    cartBtn.style.scale = '1.1';
    setTimeout(function() {
        cartBtn.style.backgroundColor = 'transparent';
        cartBtn.style.scale = '1';
    }, 200);

    let flag = false;
    for(let item of cartList){
        if(item.innerText == name){
            flag = item;
            break;
        }
    }

    if(flag){
        let parent = flag.parentElement.parentElement;
        add(parent.querySelectorAll('.item-quantity-btn')[1]);
    }

    else{
        let parent = document.createElement('div');
        let cartList = document.getElementById('cart-list');
        let price = card.querySelector('.food-price').innerText;

        parent.className = 'cart-item';
        parent.innerHTML = `
        <div class="item-img" style='background-image: ${card.querySelector('.card-img-rating').style.backgroundImage};'></div>
        <div class="item-details">
        <span class="item-name">${name}</span>
        <span class="item-price">₹ <span class='item-price-number'>${price}</span> for one</span>
        <div class="item-quantity">
        <button class="item-quantity-btn" onclick="reduce(this)">-</button>
        <span class="item-quantity-number">1</span>
        <button class="item-quantity-btn" onclick="add(this)">+</button>
        </div>
        </div>
        <div class="item-remove-total">
        <button class="remove-item" onclick="removeItem(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
        <span>₹<span class="item-total-price">${price}</span></span>
        </div>`

        cartList.appendChild(parent);
        let itemsCount = document.getElementById('totalItems')
        itemsCount.innerText++;
        document.getElementById('grandTotal').innerText = Number(document.getElementById('grandTotal').innerText) + Number(price);
        if(itemsCount.innerText == 1){
            document.getElementById('empty-cart-message').style.display = 'none';
            cartList.style.display = 'flex';
            document.getElementById('bill').style.display = 'flex';
        }
    }
}

// Search Feature
let searchBar = document.querySelector('.restaurant-search');
function filter(){
    let target = searchBar.value.trim().toLowerCase();
    let domain = document.querySelectorAll('.restaurant-card');
    for(let elem of domain) {
        if(elem.querySelector('.restaurant-name').innerText.toLowerCase().includes(target)){
            elem.style.display = 'flex';
        }
        else {
            elem.style.display = 'none';
        }
    }
}

searchBar.addEventListener('input', filter)