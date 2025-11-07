window.addEventListener('scroll', () => {
    nav = document.getElementById('navbar');
    nav_brand = document.getElementById('navbar_brand_name');
    if(window.scrollY > 120){
        nav.classList.add('scroll')
        // nav_brand.style.opacity = '1';
        nav_brand.classList.add('opacity-one');
    }
    else{
        nav.classList.remove('scroll')
        // nav_brand.style.opacity = '0'
        nav_brand.classList.remove('opacity-one')
    }
})