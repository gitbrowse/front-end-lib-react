import React from 'react'
import { connect } from 'react-redux';
import { createStore } from 'redux'
import PropTypes from "prop-types";

// const changeCityId = (cityId, action) => {
//     if(action.type === 'increase-cityId'){
//         cityId+=1;
//     } else if (action.type === 'decrease-cityId') {
//         cityId-=1;
//     }
//     return cityId;
// }
// const changeShopId = (shopId, action) => {
//     if(action.type === 'increase-shopId'){
//         shopId+=1;
//     } else if (action.type === 'decrease-shopId') {
//         shopId-=1;
//     }
//     return shopId;
// }
// const changeTimeType = (timeType, action) => {
//     if(action.type === 'increase-timeType'){
//         timeType+=1;
//     } else if (action.type === 'decrease-timeType') {
//         timeType-=1;
//     }
//     return timeType;
// }
//
//
// const filter = (state={cityId: 0, shopId: 0, timeType: 0}, action) => {
//
//     return {
//         cityId: changeCityId(state.cityId, action),
//         shopId: changeShopId(state.shopId, action),
//         timeType: changeTimeType(state.timeType, action),
//     }
// }
//
// let store = createStore(filter);

class MainContainer extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    state = {
        cityId: 0,
        shopId: 0,
        timeType: 0,
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            console.log(this.props);
            console.log(this.props.store.getState());
            this.setState({
                cityId: this.props.store.getState().cityId,
                shopId: this.props.store.getState().shopId,
                timeType: this.props.store.getState().timeType,
            })
        })
        console.log(this.props);
    }

    render() {

        const { cityId, shopId, timeType } = this.state;

        return (
            <div>
                <button onClick={() => { this.props.store.dispatch({type:'increase-cityId'}); }}>increase</button>
                <button onClick={() => { this.props.store.dispatch({type:'decrease-cityId'}); }}>increase</button>
                <button onClick={() => { this.props.store.dispatch({type:'increase-shopId'}); }}>increase</button>
                <button onClick={() => { this.props.store.dispatch({type:'decrease-shopId'}); }}>increase</button>
                <button onClick={() => { this.props.store.dispatch({type:'increase-timeType'}); }}>increase</button>
                <button onClick={() => { this.props.store.dispatch({type:'decrease-timeType'}); }}>increase</button>
                <label>{ cityId }</label>
                <label>{ shopId }</label>
                <label>{ timeType }</label>
            </div>
        )
    }
}
// MainContainer = connect((state) => ({
//     counter: state.counter
// }))(MainContainer);

export default MainContainer;
