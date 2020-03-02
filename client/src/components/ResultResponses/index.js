import React from "react";

class ResultResponses extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm">
                        <p>{this.props.response}</p>
                    </div>
                    <div className="col-sm">
                        <p>{this.props.observation}</p>
                    </div>
                    <div className="col-sm">
                        <p>{this.props.comment}</p>
                    </div>
                    {/* <div className="col-sm-6">
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ResultResponses