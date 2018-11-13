import { connect } from 'react-redux';
import setCount from '../action/count'

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCount: (newCount) => {
            dispatch(setCount(newCount));
        }
    }
}

export default (component) => {

    component = connect(mapStateToProps, mapDispatchToProps)(component);

    return component;
}
