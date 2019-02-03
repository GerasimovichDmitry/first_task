import React from 'react';
import './Menu.css';
import {NavLink} from "react-router-dom"


class Menu extends React.Component {

    render() {
        return (
            <div className="nav-menu">
                <div className='nav-block'>
                    <div className='nav-item'>
                        <NavLink exact to="/clock">
                            Clock
                        </NavLink>
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                        <NavLink to="/form">
                            Form
                        </NavLink>
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                            <NavLink exact to="/">
                            Link
                        </NavLink>
                    </div>
                </div>
                <div className='nav-block'>
                    <div className='nav-item'>
                        <NavLink to="/drop_down">
                            Drop down
                        </NavLink>
                    </div>
                </div>

            </div>
        )
    };
}

export default Menu;
