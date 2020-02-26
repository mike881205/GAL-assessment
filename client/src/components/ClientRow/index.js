import React, { Component } from "react";

class ClientRow extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary">
                    <div className="row">
                        <div className="col-sm">
                            <p> {this.props.lastName} </p>
                        </div>
                        <div className="col-sm">
                            <p> {this.props.firstName} </p>
                        </div>
                        <div className="col-sm">
                            <p> {this.props.city} </p>
                        </div>
                        <div className="col-sm">
                            <p> {this.props.state} </p>
                        </div>
                        <div className="col-sm">
                            <p> {this.props.phone} </p>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

}

export default ClientRow