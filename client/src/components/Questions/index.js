import React from "react";

class Questions extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <p>Are shrubs, bushes and grass trimmed back or removed so they do not infringe on or obstruct the walkway (potential tripping hazard)?</p>
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
        );
    }
}

export default Questions