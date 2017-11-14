import React from 'react';
import logo from './icons8-admin.png';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/" className="navbar-brand">
                                <img src={logo} style={{height:32, width:32}}/>
                            </a>
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}