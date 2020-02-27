import React from "react";

class Section extends React.Component {
    state = {
        checked: false,
        showQuestions: true
    };


    notApplicable = () => {

        if (this.state.checked === false) {
            this.setState({ checked: true })
            this.setState({ showQuestions: false })
            console.log("Checked")
        } else {
            this.setState({ checked: false })
            this.setState({ showQuestions: true })
            console.log("Unchecked")
        }

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <h3> {this.props.section} </h3>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div className="col-sm-1">
                                <input type="checkbox" onClick={this.notApplicable}></input>
                            </div>
                            <div className="col-sm">
                                <p>N/A</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Section