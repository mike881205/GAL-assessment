import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import ClientRow from "../../components/ClientRow"

class Clients extends Component {

    state = {
        clients: []
    }

    getClients = () => {
        API.getClients()
            .then(res => {
                console.log(res.data)
                this.setState({ clients: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getClients()
    }

    render() {
        return (
            <Container fluid>
                <div className="overflow-auto text-center clientBox">
                    <div className="row">
                        <div className="col-sm">
                            <h3>Last Name</h3>
                        </div>
                        <div className="col-sm">
                            <h3>First Name</h3>
                        </div>
                        <div className="col-sm">
                            <h3>City</h3>
                        </div>
                        <div className="col-sm">
                            <h3>State</h3>
                        </div>
                        <div className="col-sm">
                            <h3>Phone</h3>
                        </div>
                    </div>
                    {this.state.clients.map(client => (
                        <ClientRow
                            key={client.id} id={client.id} firstName={client.firstName} lastName={client.lastName} city={client.city} state={client.state} phone={client.phone}
                        />
                    ))}
                </div>
            </Container>
        )
    }

}

export default Clients