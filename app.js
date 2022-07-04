const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal_wrapper');
const close = document.querySelector('#closed');
const btn_purple2 = document.querySelector('.btn_purple2');
trigger.addEventListener('click', function(){
    modalWrapper.classList.add('active');
});
close.addEventListener('click', function(){
    modalWrapper.classList.remove('active');
});
btn_purple2.addEventListener('click', function(){ 
    modalWrapper.classList.remove('active');
    alert('LogIn successfully');    
});