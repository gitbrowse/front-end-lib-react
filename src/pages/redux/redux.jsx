import React, { PureComponent } from 'react'

class Redux extends PureComponent {

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

export default Redux;
