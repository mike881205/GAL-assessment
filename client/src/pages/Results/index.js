import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"
import ResultSection from "../../components/ResultSection"
import ResultQuestion from "../../components/ResultQuestion"

class Results extends Component {

    state = {
        sections: [],
    }

    resultArry = this.props.results
    resultSections = []
    fullResults = []
    finalResults = []

    buildResults = () => {

        API.getSections()
            .then(res => {
                this.setState({ sections: res.data })
                const { sections } = this.state
                for (let i = 0; i < this.resultArry.length; i++) {
                    let sectionID = this.resultArry[i].SectionId
                    for (let j = 0; j < sections.length; j++) {
                        if (sectionID === sections[j].id) {
                            this.resultSections.push(sections[j])
                            for (let k = 0; k < this.resultSections.length; k++) {
                                if (this.resultSections[k + 1] === this.resultSections[k]) {
                                    this.resultSections.splice(k + 1)
                                }
                            }
                        }
                    }
                }
                for (let i = 0; i < this.resultSections.length; i++) {
                    let resultsObj = {
                        section: "",
                        questions: []
                    }
                    resultsObj.section = this.resultSections[i].section
                    for (let j = 0; j < this.resultSections[i].Questions.length; j++) {
                        for (let k = 0; k < this.resultArry.length; k++) {
                            if (this.resultArry[k].QuestionId === this.resultSections[i].Questions[j].id) {
                                let questObj = {
                                    question: "",
                                    response: "",
                                    observation: "",
                                    comment: ""
                                }
                                questObj.question = this.resultSections[i].Questions[j].question
                                questObj.response = this.resultArry[k].response
                                questObj.observation = this.resultArry[k].observation
                                questObj.comment = this.resultArry[k].comment
                                resultsObj.questions.push(questObj)
                            }
                        }   
                    }
                    this.fullResults.push(resultsObj)
                }

                console.log(this.fullResults)

            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidMount() {
        this.buildResults()
    }

    render() {
        return (
            <div>
                <Header />
                {/* {this.state.resultArry.map(section => (
                    <ResultSection key={section.id} id={section.id} section={section.section} notApplicable={this.notApplicable}>
                        {section.Questions.map(question => (
                            <ResultQuestion
                                key={question.id}
                                id={question.id}
                                section={question.SectionId}
                                question={question.question}
                            />
                        ))}
                    </ResultSection>
                ))} */}
            </div>
        );
    }

}

export default Results;