import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import "./style.css";

class ClientInfo extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        number_street: "",
        city: "",
        state: "",
        zip: "",
        assessor: "",
        audit: "",
        dwelling: "",
        gateCode: ""
    };

    addClient = event => {
        event.preventDefault();
        API.addClient({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            number_street: this.state.number_street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            assessor: this.state.assessor,
            audit: this.state.audit,
            dwelling: this.state.dwelling,
            gateCode: this.state.gateCode
        })
            .then(
                console.log("client added")
            )
            .catch(err => {
                console.log(err);
            });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        });
    };

    render() {
        return (
            <Container
                classes="clientInfo"
            >
                <form>
                    <FormGroup>
                        <Label text="Name" />
                        <Input
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            type="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Email" />
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Phone" />
                        <Input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            type="phone"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="House/Building Number, Street Name" />
                        <Input
                            name="number_street"
                            value={this.state.number_street}
                            onChange={this.handleInputChange}
                            type="number_street"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="City" />
                        <Input
                            name="city"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                            type="city"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="State" />
                        <Input
                            name="state"
                            value={this.state.state}
                            onChange={this.handleInputChange}
                            type="state"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Zip" />
                        <Input
                            name="zip"
                            value={this.state.zip}
                            onChange={this.handleInputChange}
                            type="zip"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Assessor" />
                        <Input
                            name="assessor"
                            value={this.state.assessor}
                            onChange={this.handleInputChange}
                            type="assessor"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Audit" />
                        <Input
                            name="audit"
                            value={this.state.audit}
                            onChange={this.handleInputChange}
                            type="audit"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Dwelling Type" />
                        <Input
                            name="dwelling"
                            value={this.state.dwelling}
                            onChange={this.handleInputChange}
                            type="dwelling"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label text="Gate Code" />
                        <Input
                            name="gateCode"
                            value={this.state.gateCode}
                            onChange={this.handleInputChange}
                            type="gateCode"
                        />
                    </FormGroup>
                    {this.state.error ? <Small text={this.state.error} /> : ""}
                    <FormBtn
                        disabled={
                            this.state.name && this.state.email && this.state.phone && this.state.number_street && this.state.city && this.state.state && this.state.zip && this.state.assessor && this.state.dwelling && this.state.audit ? "" : "disabled"
                        }
                        text="Submit"
                        onClick={this.addClient}
                        classes="btn-primary"
                    />
                </form>
            </Container>
        );
    }
}

export default ClientInfo;
