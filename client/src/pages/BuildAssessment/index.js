import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import Section from "../../components/Section"
// import "./style.css";

class BuildAssessment extends Component {
    state = {
        sections: []
    };


    buildAssessment = () => {

        API.getSections()
            .then(res => {
                console.log(res);
                this.setState({sections: res.data})
            })
            .catch(err => {
                console.log(err);
            });

    };

    componentDidMount() {
        this.buildAssessment()
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value.trim()
    //     });
    // };

    render() {
        return (
            <div>
                {this.state.sections.map(index => (
                    <Section
                        key={index.id}
                        section={index}
                    />
                ))}
            </div>
        );
    }
}

export default BuildAssessment;
