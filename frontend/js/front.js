const menuIcon = document.getElementById('meni-icon');

menuIcon.addEventListener('click', navMenu)

function navMenu(e){
    console.log(e);
    let menu = document.getElementById('menu-list');

    let lItems = menu.querySelectorAll('li.nav__item');
    console.log(lItems);
    for(let i = 0; i < lItems.length; i++){
        lItems[i].classList.toggle('active');
    }
    
}



// document.addEventListener('click', Handler);

// function Handler(e){
//     alert('You\'re about to start using FrontJS');
// }