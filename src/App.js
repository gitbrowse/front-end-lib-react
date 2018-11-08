import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar';
import { createStore } from 'redux'
import PropTypes from 'prop-types';
import AsideBar from './components/aside-bar';
import MainContainer from './components/main-container';
import { Provider } from 'react-redux';


import './App.less';



const changeCityId = (cityId, action) => {
    if(action.type === 'increase-cityId'){
        cityId+=1;
    } else if (action.type === 'decrease-cityId') {
        cityId-=1;
    }
    return cityId;
}
const changeShopId = (shopId, action) => {
    if(action.type === 'increase-shopId'){
        shopId+=1;
    } else if (action.type === 'decrease-shopId') {
        shopId-=1;
    }
    return shopId;
}
const changeTimeType = (timeType, action) => {
    if(action.type === 'increase-timeType'){
        timeType+=1;
    } else if (action.type === 'decrease-timeType') {
        timeType-=1;
    }
    return timeType;
}


const filter = (state={cityId: 0, shopId: 0, timeType: 0}, action) => {

    return {
        cityId: changeCityId(state.cityId, action),
        shopId: changeShopId(state.shopId, action),
        timeType: changeTimeType(state.timeType, action),
    }
}

let store = createStore(filter);

class App extends Component {

    // static propTypes = {
    //     store: PropTypes.object.isRequired,
    // };

    // static childContextTypes = {
    //     themeColor: PropTypes.string
    // }
    // getChildContext () {
    //     return { themeColor: this.state.themeColor }
    // }

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <Provider store={ store }>
                <div id="app" className="app-container">
                    <TopNavBar></TopNavBar>
                    <div className="section">
                        <AsideBar></AsideBar>
                        <MainContainer store={store}></MainContainer>
                    </div>
                </div>
            </Provider>
        );
    }
}

// App = connect((state) => ({
//     counter: state.counter
// }))(App);


export default App;
