import usersStore from "./store/users-store";



/**
 * 
 * @param {HTMLDivElement} element 
 */


export const UsersApp = async( element ) => {

    element.innerHTML = `loading...`;
    await usersStore.loadNextPage();

    
    
    
};
