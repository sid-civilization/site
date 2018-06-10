import React from 'react';
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="d-flex w-50">
                    <a className="navbar-brand" href="/">Sid Civilization</a>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quick">Quick Game</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/join">Join Game</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;