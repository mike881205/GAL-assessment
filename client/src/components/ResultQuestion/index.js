import React from "react";

class ResultQuestion extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <p>{this.props.question}</p>
                </div>
                <div className="col-sm">
                    <p>Response</p>
                </div>
                <div className="col-sm">
                    <p>Observation</p>
                </div>
                <div className="col-sm">
                    <p>Comment</p>
                </div>
            </div>
        );
    }
}

export default ResultQuestion