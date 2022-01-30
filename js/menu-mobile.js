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

var icon = document.querySelector('.iconx i');
icon.addEventListener('click',()=>{
    let btn = document.querySelector('.iconx i');
    if (btn.classList.contains("fa-bars")) { 
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-times"); 
      } else { 
        btn.classList.remove("fa-times"); 
        btn.classList.add("fa-bars"); 
      }
    });

function mobile(){
    const mobileMenu = document.querySelector('.menu__mobile');
    mobileMenu.classList.toggle('show');
    var botao = document.querySelector(".iconx i"); 
    if (botao.classList.contains("fa-bars")) { 
      botao.classList.remove("fa-bars");
      botao.classList.add("fa-times"); 
    } else { 
      botao.classList.remove("fa-times"); 
      botao.classList.add("fa-bars"); 
    }
} 
