import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"

class Results extends Component {

    componentDidMount() {
        console.log(this.props.results)
    }

    render() {
        return (
            <div>
                <Header />
                
            </div>
        )
    }

}

export default Results;