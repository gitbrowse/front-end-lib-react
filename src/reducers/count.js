import { SETCOUNT } from '../action/count'

export default (state = 0, action) => {
    if (action.type === SETCOUNT) {
        return action.value;
    }
    return state;
}
