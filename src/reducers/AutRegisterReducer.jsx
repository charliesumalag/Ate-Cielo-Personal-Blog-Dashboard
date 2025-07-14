export const authRegisterInitialState = {
    name : '',
    username : '',
    password : '',
    password_confirmation : '',
    errors: {},
}


export function authRegisterReducer(state, action) {
    switch (action.type) {
        case 'updateField':
            return {
                ...state,
                [action.field] : action.value
        }

        case 'setErrors' :
            return{
                ...state,
                errors: action.errors
            }
        default:
            return state;
    }
}
