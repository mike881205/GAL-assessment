import React from "react";
import Question from "../Question"

class Section extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <h3> {this.props.section} </h3>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <input type="checkbox" label="Check me out"></input>
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
            </div>
        );
    }
}

export default Section