import { ADD_TO_FAVORITE, DELETE_TO_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {...state, myFavorites: [...state.myFavorites, action.payload]};

        case DELETE_TO_FAVORITE:
            return {...state, 
                    myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload),
                }

        default:
            return {...state};
    }
}

export default rootReducer;