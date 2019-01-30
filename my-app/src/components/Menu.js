import React from 'react';
import './Menu.css';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ind: false,
            form: false,
            clock: false,
            time: new Date(),
        }
    }


    changeIndex = (e) => {
        if (e.currentTarget.innerHTML === 'Drop down') {
            this.setState({
                ind: !this.state.ind
            })
        } else if (e.currentTarget.innerHTML === 'Form'){
            this.setState({
                form: !this.state.form
            })
        }else if (e.currentTarget.innerHTML === 'Clock'){
            this.setState({
                clock: !this.state.clock
            })
        }

    };

    render() {
        return (
            <div className="nav-menu">
                <div className='nav-block'>
                    <div className='nav-item'>
                        <a href='#' onClick={this.changeIndex.bind(this)}>
                            Clock
                        </a>
                    </div>
                    <div className={this.state.clock ? 'clock show' : 'hide'}>
                        {this.state.time.toLocaleTimeString()}
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                        <a href='#' onClick={this.changeIndex.bind(this)}>
                            Form
                        </a>
                    </div>
                    <div  className={this.state.form ? 'form show' : 'hide'}>
                        <div>
                        <input placeholder=' Write your nickname'/>
                        <input placeholder=' Write your password'/>
                            <div>
                            <button>
                                Log in
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                        <a href='/'>
                            Link
                        </a>
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                        <a href='#' onClick={this.changeIndex.bind(this)}>
                            Drop down
                        </a>
                    </div>
                    <div className={this.state.ind ? 'drop-down show' : 'hide'}>
                        <div>
                            ReactJS
                        </div>
                        <div>
                            Native JS
                        </div>
                        <div>
                            CSS
                        </div>
                        <div>
                            HTML
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}

export default Menu;
