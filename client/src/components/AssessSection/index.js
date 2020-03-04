import React from "react";
import "./style.css"

class AssessSection extends React.Component {
    state = {
        checked: false,
    };


    notApplicable = () => {

        if (this.state.checked === false) {
            this.setState({ checked: true })
            console.log("Checked")
        } else {
            this.setState({ checked: false })
            console.log("Unchecked")
        }

    }

    render() {
        return (
            <div>
                <div className="row section">
                    <div className="col-sm-3">
                        <h3> {this.props.section} </h3>
                    </div>
                    <div className="col-sm-3 d-flex align-items-center">
                        <div className="row">
                            <div className="col-sm-1">
                                <input type="checkbox" onClick={this.notApplicable}></input>
                            </div>
                            <div className="col-sm d-flex align-items-center">
                                <h5>N/A</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                <div className="questions">
                    {
                        this.state.checked ? "" : this.props.children
                    }
                </div>
            </div>
        );
    }
}

export default AssessSection