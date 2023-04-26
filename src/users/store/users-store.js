import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],

};


const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if ( users.length === 0) return;
    
    state.currentPage += 1;
    state.users = users;
};


const loadPreviousPage = async () => {
    
    const users = await loadUsersByPage(state.currentPage - 1);
    if ( users.length === 0) return;
    state.currentPage -= 1;
    state.users = users;
    if (state.currentPage <= 0) {
        state.currentPage = 1;
        
    };
    

    
};


/**
 * 
 * @param {User} updatedUser 
 */

const onUserChanged =  (updatedUser) => {
    
    state.users = state.users.map( user => {

        let wasFoud = false;

        if ( user.id === updatedUser.id ) {
            wasFoud = true;
            return updatedUser;
        }
        return user;
    
});

if ( state.users.length < 10 && !wasFoud ){
    state.users.push(updatedUser);
}

};


const reloadPage = async () => {
    
    throw new Error('Not implemented');

};

export default {    
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,


    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {number}
     */
    getCurrentPage: () => state.currentPage,


};