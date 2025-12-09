let container = document.querySelector('.restaurant-cards-container');
let card;
for(let data of restaurants){
    card = document.createElement('div');
    card.className = 'restaurant-card';
    card.innerHTML = `
    <div class="card-img-rating" style="background-image: url(${data.img});">
        <span class="restaurant-rating">⭐️ ${data.rating}</span>
    </div>
    <div class="card-content">
        <h1 class="restaurant-name">${data.name}</h1>
        <h3 class="restaurant-type">${data.categories}</h3>
        <span class="restaurant-address">${data.address}</span>
    </div>
    <a href="./menu.html" class="card-view-menu">View Menu</a>
    `;
    container.appendChild(card);
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