import React, { Component } from "react";
import API from "../../utils/API";
import Section from "../../components/Section"
import Question from "../../components/Question"
import Header from "../../components/Header"
import { Redirect } from 'react-router-dom'

class Assessment extends Component {
    state = {
        sections: [],
        resultsSubmitted: false
    };


    buildAssessment = () => {
        API.getSections()
            .then(res => {
                this.setState({ sections: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let responses = [];

        for (let i = 0; i < event.target.length; i++) {

            let question = {
                ClientId: "",
                SectionId: "",
                QuestionId: "",
                response: "",
                observation: "",
                comment: ""
            }
            let name = event.target[i].name
            let splitName = name.split("-")
            let category = splitName[2]

            if (name) {

                if (category === "response") {
                    question.response = event.target[i].value
                }
                if (category === "observation") {
                    question.observation = event.target[i].value
                }
                if (category === "comment") {
                    question.comment = event.target[i].value
                }

                question.SectionId = parseInt(splitName[0])
                question.QuestionId = parseInt(splitName[1])
                responses.push(question);
            }
        }

        let submission = []

        for (let i = 0; i < responses.length; i++) {

            if (responses[i].response !== "Response" && responses[i].response !== "") {
                responses[i].observation = responses[i + 1].observation
                responses[i].comment = responses[i + 2].comment
                submission.push(responses[i])
            }
            // else if ((responses[i].response === "Response" || responses[i].response === "") && responses[i].observation === "" && responses[i].comment === "") {
            //     alert("you have unanswered responses")
            //     return
            // }
        }

        for (let i = 0; i < submission.length; i++) {

            API.submitAssessment({
                ClientId: this.props.clientID,
                SectionId: submission[i].SectionId,
                QuestionId: submission[i].QuestionId,
                response: submission[i].response,
                observation: submission[i].observation,
                comment: submission[i].comment
            })
                .then(res => {
                    console.log("Question Responses Submitted")
                    this.props.setResults(res.data)
                    this.setState({ resultsSubmitted: true })
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }


    componentDidMount() {
        this.buildAssessment()
    }

    render() {
        if (!this.state.resultsSubmitted) {
            return (
                <div>
                    <Header />
                    <form onSubmit={this.handleSubmit}>
                        {this.state.sections.map(section => (
                            <Section key={section.id} id={section.id} section={section.section} notApplicable={this.notApplicable}>
                                {section.Questions.map(question => (
                                    <Question
                                        key={question.id}
                                        id={question.id}
                                        section={question.SectionId}
                                        question={question.question}
                                    />
                                ))}
                            </Section>
                        ))}
                        <button type="submit" className="btn btn-primary btn-lg">Submit Assessment</button>
                    </form>
                </div>
            );
        } else {
            return (
                <Redirect to="/results" />
            )
        }

    }
}

export default Assessment;

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value.trim()
    //     });
    // };
