import React from "react";
import Questions from "../../components/Questions"

class Section extends React.Component {
    render() {
        const { section } = this.props.section;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <h3> {section} </h3>
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
                <Questions />
            </div>
        );
    }
}

export default Section