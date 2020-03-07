import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-flex justify-content-center">
                    <Link to="/">
                        <img className="GALimg" src="https://www.goldenageliving.com/wp-content/uploads/2017/11/Goldenageliving-logo-web.jpg" alt="mainImg"></img>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Header