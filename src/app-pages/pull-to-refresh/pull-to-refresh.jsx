import React, { PureComponent } from 'react'
import { PullToRefresh as Refresh} from 'antd-mobile';


export default class PullToRefresh extends PureComponent{

    state = {
        data: [],
        refreshing: false,
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

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.pageStatus.pageNo++;
        this.getData();
    }


    render() {

        const { data, refreshing } = this.state;

        return (
            <div>
                <Refresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: document.documentElement.clientHeight,
                        overflow: 'auto',
                    }}
                    indicator={{ deactivate: '上拉可以刷新' }}
                    direction={ 'up' }
                    refreshing={refreshing}
                    onRefresh={ this.onRefresh }
                >
                    {data.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center', padding: 20 }}>
                            {item.value}
                        </div>
                    ))}
                </Refresh>
            </div>
        )
    }
}
