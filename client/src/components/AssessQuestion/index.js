import React from "react";
import "./style.css"

class AssessQuestion extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <p>{this.props.question}</p>
                </div>
                <div className="col-sm dropdown">
                    {this.props.response ? (<p>{this.props.response}</p>): (<select className = "form-control" name = {`${this.props.section}-${this.props.id}-response`}>
                            <option defaultValue="" disabled selected>Response</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>N/A</option>
                        </select>)}

                    </div>
            <div className="col-sm form-group">
                <input type="observation" className="form-control" id="observation" placeholder="Observation" name={`${this.props.section}-${this.props.id}-observation`}></input>
            </div>
            <div className="col-sm form-group">
                <input type="comment" className="form-control" id="comment" placeholder="Comment" name={`${this.props.section}-${this.props.id}-comment`}></input>
            </div>
                </div >
        );
    }
}

export default AssessQuestion