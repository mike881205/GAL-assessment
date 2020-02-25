import React from "react";

class Question extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map(question => (
                    <div className="row">
                        <div className="col-sm">
                            <p>{question.question}</p>
                        </div>
                        <div className="col-sm dropdown">
                            <select className="form-control">
                                <option defaultValue="" disabled selected>Response</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>N/A</option>
                            </select>
                        </div>
                        <div className="col-sm form-group">
                            <input type="observation" className="form-control" id="observation" placeholder="Observation"></input>
                        </div>
                        <div className="col-sm form-group">
                            <input type="comment" className="form-control" id="comment" placeholder="Comment"></input>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default Question