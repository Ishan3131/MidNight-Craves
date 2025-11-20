const name = localStorage.getItem('firstname')
if(name){
    document.getElementById('navbar_btns').innerHTML = `<h1 class=navbar-name>Hi, ${name}</h1>`;
    document.getElementsByClassName('browse-restaurant')[0].setAttribute('href', './restaurant.html');
    document.getElementsByClassName('view-all-restaurants')[0].setAttribute('href', './restaurant.html');
    document.getElementsByClassName('order-now')[0].setAttribute('href', './restaurant.html');
    document.getElementsByClassName('view-menu')[0].setAttribute('href', './menu.html');
}