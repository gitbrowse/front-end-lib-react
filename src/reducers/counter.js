

export default (state = {
    name: 'ss',
    counter: 0,
}, action) => {
    if(action.type === 'setName') {
        state.name = action.name;
    } else if (action.type === 'add'){
        state.counter += 1;
    } else if (action.type === 'subtract') {
        state.counter -= 1;
    }
    return { ...state };
}
