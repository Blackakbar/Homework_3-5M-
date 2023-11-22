import { types } from "./types";

const initialState = {
    users: []
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS:
            return { ...state, users: action.payload };
        case types.USER_ONE_INFO:
            return { ...state, users: state.users.map(user => (user.id === action.payload.id ? { ...user, additionalInfo: action.payload.additionalInfo } : user))};
        default:
            return state;
    }
}
