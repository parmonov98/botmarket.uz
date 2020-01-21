class UI{
    constructor(){
        console.log('hey, hi!');
    }

    sidebarToggler(){
        const list = document.getElementById('sidebar-menu');
        const items = list.querySelectorAll('li.item');
        
        //console.log();

        if(list.getAttribute('data-sidebar') == 'true'){
            
            list.setAttribute('data-sidebar', false);
            items.forEach(item => {
                item.setAttribute('data-value', item.textContent);
                //console.log(item.childNodes);
                item.childNodes.forEach(node => {
                    //console.log(node.tagName);
                    if(node.tagName == 'IMG'){
                        //console.log(node.src);
                        node.src = '/imgs/logo-sm.png'
                        node.classList.add('logo-sm');
                        return;
                    }else if(node.tagName == 'A'){
                        
                        node.nextSibling.remove();
                    }
    
                });
                //item.childNodes.textContent = '';
            });
        }else{

            list.setAttribute('data-sidebar', 'true');

            items.forEach(item => {
                let textContent = item.getAttribute('data-value');
                //console.log(textContent);
                item.childNodes.forEach(node => {
                    //console.log(node.tagName);
                    if(node.tagName == 'IMG'){
                        //console.log(node.src);
                        node.src = '/imgs/logo.png'
                        node.classList.remove('logo-sm');
                        return;
                    }else if(node.tagName == 'A'){
                        node.parentNode.insertBefore(document.createTextNode(textContent), node.nextSibling);
                        
                    }
    
                });
                //item.childNodes.textContent = '';
            });
        }
        

        

       
    }

    /* checking if the element has a parent with  passed class*/
    hasClass(element, className) {
        do {
          if (element.classList && element.classList.contains(className)) {
            return element;
          }
          element = element.parentNode;
        } while (element);
        return false;
    }
}

