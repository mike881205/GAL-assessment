import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import Section from "../../components/Section"
import Question from "../../components/Question"
// import "./style.css";

class Assessment extends Component {
    state = {
        sections: []
    };


    buildAssessment = () => {

        API.getSections()
            .then(res => {
                console.log(res);
                this.setState({ sections: res.data })
            })
            .catch(err => {
                console.log(err);
            });

    };

    componentDidMount() {
        this.buildAssessment()
    }

    render() {
        return (
            <div>
                {this.state.sections.map(section => (
                    <Section key={section.id} id={section.id} section={section.section}>
                        {section.Questions.map(question => (
                            <Question
                                key={question.id}
                                id={question.id}
                                question={question.question}
                            />
                        ))}
                    </Section>
                ))}
            </div>
        );
    }
}

export default Assessment;

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value.trim()
    //     });
    // };
