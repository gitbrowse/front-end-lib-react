import React, { PureComponent } from 'react'

export default class pullToRefresh extends PureComponent {

    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return (
            <div>
                here is pullToRefresh
            </div>
        )
    }
}
