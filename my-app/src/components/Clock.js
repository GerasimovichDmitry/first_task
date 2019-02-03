import React from 'react';
import './Clock.css';


class Clock extends React.Component {
    // console.log(props.time.toLocaleTimeString())
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            seconds: new Date()
        }
    }

    currentTime = () => {

        this.setState({
            time: new Date(),
        })
    };

    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }

    render() {
        let {time, seconds} = this.state;
        let a = Math.floor((Number(time) - Number(seconds))/1000);
        return (
            <div className='clock show'>
                <div>
                    {time.toLocaleTimeString()}
                </div>
                <div>
                    {a}
                </div>
            </div>
        )
    }
};
export default Clock;
