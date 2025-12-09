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

// Filter Function
let allRestaurants = document.querySelectorAll('.restaurant-card');
let select = document.querySelector('.drop-down');
let searchBar = document.querySelector('.restaurant-search');

// function filter() {
//     let targetValue = select.value;
//     let target = searchBar.value.trim().toLowerCase();
//     for(let elem of allRestaurants) {
//         if(elem.querySelector('.restaurant-type').innerText.toLowerCase().includes(targetValue) && ) {
//             elem.style.display = 'flex'
//         }
//         else {
//             elem.style.display = 'none';
//         }
//     }
// }


// Search+Filter Function
function filterSearch(){
    let target = searchBar.value.trim().toLowerCase();
    let targetType = select.value;
    for(let elem of allRestaurants) {
        if(elem.querySelector('.restaurant-name').innerText.toLowerCase().includes(target) && elem.querySelector('.restaurant-type').innerText.toLowerCase().includes(targetType)){
            elem.style.display = 'flex';
        }
        else {
            elem.style.display = 'none';
        }
    }
}

searchBar.addEventListener('input', filterSearch)
select.addEventListener('change', filterSearch)
