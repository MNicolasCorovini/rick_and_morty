export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const DELETE_TO_FAVORITE = 'DELETE_TO_FAVORITE';

export const addToFavorite = (character) => {
    return{
        type: ADD_TO_FAVORITE,
        payload: character,
    }
}

export const deleteToFavorite = (id) => {
    return{
        type: DELETE_TO_FAVORITE,
        payload: id,
    }
}