var menuBtn = document.querySelector('.items__menu-mobile i');
menuBtn.addEventListener('click',()=>{
let itemsMenu = document.querySelector('.menu__mobile');
if(itemsMenu.classList.contains('show')){
itemsMenu.classList.remove('show');
itemsMenu.classList.add('hide');
}else{
itemsMenu.classList.remove('hide');
itemsMenu.classList.add('show');    
}    
});

function mobile(){
    const mobileMenu = document.querySelector('.menu__mobile');
    mobileMenu.classList.toggle('show');
} 