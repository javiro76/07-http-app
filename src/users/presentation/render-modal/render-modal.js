import modalHtml from './render-modal.html?raw';
import './render-modal.css';


let modal, form;

//TODO: cargar usuario por id
export const showModal = () => {  
    modal?.classList.remove( 'hide-modal' );
}

export const hideModal = () => {
    modal?.classList.add( 'hide-modal' );
    
    //TODO: limpiar formulario
}




/**
 * 
 * @param {HTMLDivElement} element 
 * @returns 
 */

export const renderModal = ( element ) => { 

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
    
    form.addEventListener( 'submit', ( event ) => {
        event.preventDefault();// evita que se ejecute el evento por defecto del navegador
        console.log('Formulario enviado');

    });    


    element.append( modal );



}



