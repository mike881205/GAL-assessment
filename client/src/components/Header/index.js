import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-flex justify-content-center head">
                    <h3>Golden Age Living</h3>
                </nav>
            </div>
        )
    }
}

export default Header