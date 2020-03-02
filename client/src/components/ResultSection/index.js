import React from "react";

class AssessSection extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <h3> {this.props.section} </h3>
                    </div>
                </div>
            {this.props.children}
            </div>
        );
    }
}

export default AssessSection