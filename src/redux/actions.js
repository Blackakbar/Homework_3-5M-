import { types } from "./types";

function getUsersAction(users){
    return{
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction(){
    return async function(dispatch){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

function getUsersAdditionalInfo(id, additionalInfo){
    return {
        type: types.USER_ONE_INFO,
        payload: {id, additionalInfo}
    }
}

export function fetchUsersOneInfo(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        dispatch(getUsersAdditionalInfo(id, data))
    }
}