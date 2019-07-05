const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'changeName') {
        return { ...state, name: action.payload };
    }
    if (action.type === 'changeEmail') {
        return { ...state, email: action.payload };
    }
    if (action.type === 'changePassword') {
        return { ...state, password: action.payload };
    }
    return state;
}