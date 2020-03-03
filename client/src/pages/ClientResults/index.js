import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header"

class ClientResults extends Component {

    buildClientResults = () => {

        let ClientId = this.props.clientResults[0]

        console.log(ClientId)

        API.getClientResults({
            ClientId: ClientId
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            });

    }

    componentDidMount() {
        this.buildClientResults()
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }

}

export default ClientResults