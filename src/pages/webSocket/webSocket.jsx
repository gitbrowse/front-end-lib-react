import React, { PureComponent } from 'react'
import io from 'socket.io-client';

export default class webSocket extends PureComponent {

    state = {
        socketIO: null,
    }

    componentDidMount() {
        this.initSocket();
    }

    initSocket() {
        // const wsurl = 'ws://47.92.222.71:8001';
        const wsurl = 'ws://localhost:8001';
        console.log(wsurl);

        this.socketIO = io.connect(wsurl, {
            "transports": ['websocket']
        });
        this.socketIO.emit('group', {
            type: 'position',
            data: 'webSocket',
        });
        this.socketIO.emit('message',{
            type: 'text',
            from: 'webSocket',
            data: '123'
        })
        this.socketIO.on('webSocket',(data) => {
            console.log(data);
        })
    }

    render(){
        return (
            <div>
                here is webSocket
            </div>
        )
    }
}
