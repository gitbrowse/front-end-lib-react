import React, { PureComponent } from 'react'

import './roll-load.less'

export default class RollLoad extends PureComponent{

    state = {
        data: [],
    }

    pageStatus = {
        pageNo: 1,
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const data = [{
            value: this.pageStatus.pageNo,
        }]
        this.setState({
            data: [...this.state.data, ...data],
            refreshing: false
        })
    }

    render() {

        const { data } = this.state;

        return (
            <div ref={(el) => this.list = el}>
                {
                    data.map((item, index) => {
                        return (
                            <div className="list-item" key={index}>{ item.value }</div>
                        )
                    })
                }
            </div>
        )
    }
}
