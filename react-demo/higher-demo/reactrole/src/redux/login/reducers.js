import { roleInfo } from '../../config/roleInfo.js';

export default function reducer (state = {path: '/', islogin: false}, action) {
    switch (action.type) {
        case 'route_path':
            return { ...state, path: action.path };
        case 'login_state':
            sessionStorage.setItem('ROLE',roleInfo.filter(item => item.username ===action.userInfo.name)[0].role)  
            sessionStorage.setItem('islogin', 1)
            return { ...state, islogin: true };
        case 'logout':
            sessionStorage.setItem('islogin', 0)
            return { ...state, islogin: false };
        case 'change_role':
            sessionStorage.setItem('ROLE', action.role)
        default:
            return state;
    }
}