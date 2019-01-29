import React from 'react';
import './Menu.css';


const Menu = () => {

    toggleMenu() {
        
    };
        return(
        <div className="nav-menu">
            <div className='nav-block'>
                <div className='nav-item'>
                    <a href='#'>
                        Clock
                    </a>
                </div>
            </div>
            <div className='nav-block'>
                <div className='nav-item'>
                    <a href='#'>
                        Form
                    </a>
                </div>
            </div>
            <div className='nav-block'>
                <div className='nav-item'>
                    <a href='#'>
                        Link
                    </a>
                </div>
            </div>
            <div className='nav-block'>
                <div className='nav-item'>
                    <a href='#' onClick={this.toggleMenu.bind(this)}>
                        Drop down
                    </a>
                </div>
                <div className='drop-down'>
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
        );
}

export default Menu;
