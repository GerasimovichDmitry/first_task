import React, {Component} from 'react';
import './Menu.css';


class Menu extends Component {
    render() {
        return (
                <div className="nav-menu">
                    <div className='nav-item'>
                        <div>
                        <a href='#'>
                        Clock
                        </a>
                        </div>
                        <div>
                            adsadadasadass
                        </div>
                    </div>
                    <div className='nav-item'>
                        <a href='#'>
                        Form
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href='#'>
                        Link
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href='#'>
                        Drop down
                        </a>
                    </div>

                </div>
        );
    }
}

export default Menu;
