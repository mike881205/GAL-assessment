import React, { Component } from "react";
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                <img className="GALimg" src="https://www.goldenageliving.com/wp-content/uploads/2017/11/Goldenageliving-logo-web.jpg" alt="mainImg"></img>
                </nav>
            </div>
        )
    }
}

export default Header