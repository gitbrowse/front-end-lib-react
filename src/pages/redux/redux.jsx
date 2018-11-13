import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

import setCount from '../../action/count';

class redux extends PureComponent {

    state = {
        newCount: 0,
    }

    componentDidMount() {
        console.log(this.props);
    }

    render(){
        return (
            <div>
                <label>{ this.props.count }</label>
                <input value={ this.state.newCount } onInput={ (e) => { this.setState({ newCount: e.target.value }) } }/>
                <button onClick={ () => { this.props.setCount(this.state.newCount) } } >setCount</button>
            </div>
        )
    }
}

redux = connect((state) => {
    return state;
},(dispatch) => {
    return {
        setCount: (newCount) => { dispatch(setCount(newCount)) }
    }
})(redux);

export default redux;
