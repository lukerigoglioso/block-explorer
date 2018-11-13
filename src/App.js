import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')) ;
    }

    componentDidMount(){

        //TODO

    };


    render() {

        return (
            <div className="container">
                <p>${this.web3.version}</p>
            </div>
        );
    }
}

export default App;
