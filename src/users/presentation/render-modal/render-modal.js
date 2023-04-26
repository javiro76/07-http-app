import modalHtml from './render-modal.html?raw';
import './render-modal.css';


let modal, form;

//TODO: cargar usuario por id
export const showModal = () => {  
    modal?.classList.remove( 'hide-modal' );
}

export const hideModal = () => {
    modal?.classList.add( 'hide-modal' );
    form?.reset();
}




/**
 * 
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 * @returns 
 */

export const renderModal = ( element, callback ) => { 

    if ( modal ) return;

    modal = document.createElement( 'div' );
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector( 'form' );


    modal.addEventListener( 'click', ( event ) => {
        if (event.target.className === 'modal-container'){
            hideModal();
        }


    });   
    
    form.addEventListener( 'submit', async( event ) => {
        event.preventDefault();// evita que se ejecute el evento por defecto del navegador
        const formData = new FormData( form );
        const userLike = {};
        
        for (const [key, value] of formData) {
            if (key ===  'balance'){
                userLike[ key ] = +value;// el + convierte el string en number
                continue;
            }

            if ( key === 'isActive' ){
                userLike[ key ] = (value === 'on') ? true : false;
                continue;
            }

            userLike[ key ] = value;

        }
        //console.log( userLike );
        await callback( userLike );

        hideModal();
        
       

    });    


    element.append( modal );



}



