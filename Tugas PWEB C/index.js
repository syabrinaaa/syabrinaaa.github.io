document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()
  });

let button = document.querySelector('button[data-toggle="modal"]');
let modal =  document.querySelector('.modal');
let invalid =  document.querySelector('.invalid');
let body = document.querySelector('body');

button.addEventListener('click', function() {
    let username = document.forms['html']['username'].value;
    let password = document.forms['html']['password'].value;
    if (username=='pweb_C' && password=='123123'){
        modal.classList.add('show');
        invalid.classList.remove('show');
        body.style.backgroundColor='green';
    }
    else{
        invalid.classList.add('show');
        body.style.backgroundColor='white';
    }
});
modal.addEventListener('click', function() {
    this.classList.remove('show');
});
modal.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
});