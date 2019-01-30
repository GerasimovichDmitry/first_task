import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import {Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Menu/>
                {/*<Route path='/' render={() => {}}/>*/}
            </div>
        );
    }
}

export default App;
