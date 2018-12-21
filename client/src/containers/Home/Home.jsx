import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import settings from '../../settings/settings';
import '../Home/Home.less';
import { Loader } from '../../components/UI';

class Home extends Component {
    state = {
        imgSrc: null,
        displayLargeLoader: true
    };

    socket = socketIOClient(settings.api_base_url);

    componentDidMount() {
        setTimeout(() => {
            this.setState({ displayLargeLoader: false });
        }, 500);

        this.socket.on('image', (info) => {
            if (info.image) {
                const img = new Image();
                img.src = 'data:image/jpeg;base64,' + info.buffer;
                console.log(img.src);
                this.setState({ imgSrc: img.src });
            }
        });
    }

    render() {
        const { imgSrc, displayLargeLoader } = this.state;

        return (
            <div>
                {displayLargeLoader && <div><Loader /></div>}
                {!displayLargeLoader &&
                    <div className="container" >
                        <div className="table">
                            {imgSrc && <img src={'data:image/jpeg;' + imgSrc} title="" alt=""></img>}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Home;