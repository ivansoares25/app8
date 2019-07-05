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
