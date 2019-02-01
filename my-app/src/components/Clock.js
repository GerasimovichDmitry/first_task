import React from 'react';
import './Clock.css';



class Clock extends React.Component {
    // console.log(props.time.toLocaleTimeString())
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }

    currentTime = () => {
        this.setState({
            time : new Date()
        })
    }

    componentWillMount(){
        setInterval(()=> this.currentTime(),1000)
    }

    render() {
        console.log(this.props.match);
        return (
            <div className='clock show'>
                <div>
                    {this.state.time.toLocaleTimeString()}
                </div>
            </div>
        )
    }
    };
export default Clock;
