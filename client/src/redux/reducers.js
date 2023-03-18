const initialState ={
    characters:[]
}

function rootReducer(state, action) {
    switch (action.type) {
        case "GET ALL CHARACTERS":
            return {
                ...state,
            }
            default:
                return state
    }
}

export default rootReducer;