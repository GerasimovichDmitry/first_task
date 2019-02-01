import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Clock from './Clock'
import Form from "./Form";
import Dropdown from "./Dropdown";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Header/>
                <Menu/>
                <Route exact path="/clock" component={Clock} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/drop_down" component={Dropdown} />
            </div>
            </BrowserRouter>
        );
    }
}
export default App;
