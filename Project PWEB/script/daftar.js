// daftar/masuk menggunakan FB
function getInfo(){
    let fb = document.querySelector('#bg_gelap')
    let masuk = document.querySelector('.buttonn')

    fb.classList.add('show');
    masuk.addEventListener('click', function(e){
        e.preventDefault()
    })

    // fb.querySelector('.kotak3').addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });

    fb.addEventListener('click', function () {
        this.classList.remove('show');
        this.classList.toggle('slow')
    });
}

// daftar/masuk menggunakan TW
function getInfo1(){
    let fb = document.querySelector('#bg_gelap1')
    let masuk = document.querySelector('.buttonn')

    fb.classList.add('show');
    masuk.addEventListener('click', function(e){
        e.preventDefault()
    })

    // fb.querySelector('.kotak3').addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });

    fb.addEventListener('click', function() {
        this.classList.remove('show');
    });
}

// daftar/masuk menggunakan Google
function getInfo2(){
    let fb = document.querySelector('#bg_gelap2')
    let masuk = document.querySelector('.buttonn')

    fb.classList.add('show');
    masuk.addEventListener('click', function(e){
        e.preventDefault()
    })

    // fb.querySelector('.kotak3').addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });

    fb.addEventListener('click', function() {
        this.classList.remove('show');
    });
}

// Show Password
function showPass() {
    let pass = document.getElementById("password");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

// Login
function getLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let merah = document.querySelector('.merah')

    if (email == "labibmahya99@gmail.com" && pass == "123123") {
        window.location = "Beranda(1).html";

    }else if(email != 'labibmahya99@gmail.com' && pass != "123123"){
        merah.classList.add('show1');

        merah.addEventListener('click', function() {
            this.classList.remove('show1')
        });

    }else if(email != 'labibmahya99@gmail.com'){
        merah.classList.add('show1');

        merah.addEventListener('click', function() {
            this.classList.remove('show1')
        });
    }else if (pass != "123123"){
        merah.classList.add('show1');

        merah.addEventListener('click', function() {
            this.classList.remove('show1')
    });
    }
}
