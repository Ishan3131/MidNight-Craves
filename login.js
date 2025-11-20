function login(){
    firstname = document.getElementById('firstname').value.trim();
    lastname = document.getElementById('lastname').value.trim();
    email = document.getElementById('email').value.trim();

    if(firstname.trim()){
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    window.location = './index.html';
    }
    else{
        document.getElementById('firstname').style.border = '2px solid red';
    }
}