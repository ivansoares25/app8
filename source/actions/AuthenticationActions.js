import firebase from 'firebase';

export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: email,
    }
}

export const changePassword = (password) => {
    return {
        type: 'changePassword',
        payload: password,
    }
}

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: name,
    }
}

export const registerUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess(dispatch))
            .catch(err => registerUserErr(err, dispatch));
    }
}

const registerUserSuccess = (dispatch) => {
    dispatch({ type: 'register_user_success'});
}

const registerUserErr = (err, dispatch) => {
    dispatch({ type: 'register_user_err', payload: err.message });
}
