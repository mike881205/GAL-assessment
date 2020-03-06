import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"
import AssessQuestion from "../../components/AssessQuestion"
import AssessSection from "../../components/AssessSection"

class ClientResults extends Component {

    state = {
        sections: []
    }

    resultsArr = []

    buildClientResults = () => {

        let ClientId = this.props.clientResults[0]

        API.getClientResults(ClientId)
            .then(res => {

                console.log(res.data)

                this.setState({ sections: res.data })

                // for (let i = 0; i < res.data.length; i++) {

                //     let resultObj = {
                //         section: "",
                //         questions: []
                //     }

                //     let quesObj = {
                //         question: "",
                //         responses: []
                //     }

                //     let respObj = {
                //         response: "",
                //         observation: "",
                //         comment: ""
                //     }

                //     respObj.response = res.data[i].response
                //     respObj.comment = res.data[i].comment
                //     respObj.observation = res.data[i].observation

                //     quesObj.responses.push(respObj)

                //     for (let j = 0; j < res.data[i].Section.Questions.length; j++) {

                //         if (res.data[i].QuestionId === res.data[i].Section.Questions[j].id) {

                //             quesObj.question = res.data[i].Section.Questions[j].question

                //         }

                //     }

                //     resultObj.questions.push(quesObj)

                //     resultObj.section = res.data[i].Section.section

                //     this.resultsArr.push(resultObj)

                // }

                // console.log(this.resultsArr)

                // for (let i = 0; i < this.resultsArr.length; i++) {

                //     if ((i + 1) < this.resultsArr.length && this.resultsArr[i + 1].section === this.resultsArr[i].section) {

                //         for (let j = 0; j < this.resultsArr[i + 1].questions.length; j++) {

                //             this.resultsArr[i].questions.push(this.resultsArr[i + 1].questions[0])

                //         }

                //     }

                //     if (this.resultsArr[i].questions.length === 1) {

                //         this.resultsArr.splice(i, 1)

                //     }

                // }

                // this.setState({sections: this.resultsArr})

                // console.log(this.resultsArr)

            })
            .catch(err => {
                console.log(err);
            });

    }

    componentDidMount() {
        this.buildClientResults()
    }

    render() {
        return (
            <div>
                {this.state.sections.map((section, index) => (
                    <React.Fragment>
                        {console.log(section.SectionId === this.state.sections[index].SectionId)}
                        {index > 0 && section.SectionId === this.state.sections[index - 1].SectionId ? (
                            section.Section.Questions.map(question => (
                                question.id === section.QuestionId ? (<AssessQuestion
                                    key={question.id}
                                    id={question.id}
                                    section={question.SectionId}
                                    question={question.question}
                                    response={section.response}
                                    observation={section.observation}
                                    comment={section.comment}
                                    className="questions"
                                />) : ("")
                            ))
                        ) : (
                            <AssessSection key={section.SectionId} id={section.SectionId} section={section.Section.section} showNAbox={false}>
                                {section.Section.Questions.map(question => (
                                    question.id === section.QuestionId ? (
                                        <AssessQuestion
                                            key={question.id}
                                            id={question.id}
                                            section={question.SectionId}
                                            question={question.question}
                                            response={section.response}
                                            observation={section.observation}
                                            comment={section.comment}
                                            className="questions"
                                        />
                                    ) : ("")
                                ))}
                            </AssessSection>
                        )}
                    </React.Fragment>
                ))}
                {/* <AssessSection key={section.SectionId} id={section.SectionId} section={section.Section.section} showNAbox={false}>
                    {section.Section.Questions.map(question => (
                        question.id === section.QuestionId ? (<AssessQuestion
                            key={question.id}
                            id={question.id}
                            section={question.SectionId}
                            question={question.question}
                            response={section.response}
                            observation={section.observation}
                            comment={section.comment}
                            className="questions"
                        />)
                                )))
                            </AssessSection> */}
            </div>
        )
    }

}

export default ClientResults