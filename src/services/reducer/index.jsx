const initialState = {
    title: '',
    projectDescription: '',
    goalAmount: '',
    milestonesData: [],
    picture: [],
    InvestmentTypeDetails: [],
    InvestmentType: "",
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_DATA':
            console.log(state,action)
            return {
                ...state,
                ...action.payload
            };
        // case 'ADD_TODO':
        //     return {
        //         ...state,
        //         todos: [...state.todos, action.payload]
        //     };
        // case 'ADD_ANOTHER':
        //     console.warn(state,action)
        //     return {
        //         ...state,
        //         another: [...state.another, action.payload]
        //     };
        default:
            return state;
    }
}

export default rootReducer