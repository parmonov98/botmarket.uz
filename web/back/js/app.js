const ui = new UI();

document.addEventListener('DOMContentLoaded', function () {


    // is mobile phone
    if(window.screen.width > 359 && window.screen.width <= 768){
        ui.sidebarToggler();
        
    }
    

    const allActions = document.querySelector('.action_plus_profile');
    const diagrams = document.querySelector('.diagrams');
    
    allActions.addEventListener('click', function (e) {
        console.log(e.target);
        console.log(e.target.nextElementSibling);
        
        if(e.target.classList.contains('notifications-toggler') || e.target.classList.contains('profile-toggler') || e.target.classList.contains('messages-toggler')){
            if(e.target.nextElementSibling.getAttribute('data-shown') == 'false'){
                if(document.querySelector('div[data-shown="true"]') !== null){
                    document.querySelector('div[data-shown="true"]').classList.remove('showCard');
                    document.querySelector('div[data-shown="true"]').setAttribute('data-shown', false);
                }
                
                e.target.nextElementSibling.classList.add('showCard');
                e.target.nextElementSibling.setAttribute('data-shown', true);
                
            }else{
                e.target.nextElementSibling.setAttribute('data-shown', false);
                e.target.nextElementSibling.classList.remove('showCard');
                
            }
            console.log(1);
            
        }
     
        
        e.preventDefault(); 
    });
    
    diagrams.querySelector('.option-button').addEventListener('click', function(e) {
        diagrams.querySelector('.option-button').nextElementSibling.classList.toggle('showYearOptions');
    })
    diagrams.querySelector('.option-button2').addEventListener('click', function(e) {
        diagrams.querySelector('.option-button2').nextElementSibling.classList.toggle('showYearOptions');
    })
})


function sidebarToggler(){
    ui.sidebarToggler();
}


