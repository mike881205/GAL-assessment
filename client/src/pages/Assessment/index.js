import React, { Component } from "react";
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

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target[1].name);
        let responses = [];


    
        for (let i = 0; i < event.target.length; i++) {
            let question = {
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
                responses[i].observation = responses[i+1].observation
                responses[i].comment = responses[i+2].comment
                submission.push(responses[i])
            }

        }

        console.log(submission)

    }


    componentDidMount() {
        this.buildAssessment()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.sections.map(section => (
                    <Section key={section.id} id={section.id} section={section.section}>
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
