import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import Header from "../../components/Header"
import "./style.css";

class ClientInput extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        aptUnitNum: "",
        city: "",
        state: "",
        zip: "",
        assessor: "",
        audit: "",
        dwelling: "",
        gateCode: "",
        clientAdded: false
    };

    addClient = event => {
        event.preventDefault();
        API.addClient({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            streetAddress: this.state.streetAddress,
            aptUnitNum: this.state.aptUnitNum,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            assessor: this.state.assessor,
            audit: this.state.audit,
            dwelling: this.state.dwelling,
            gateCode: this.state.gateCode
           })
            .then(res => {
                this.setState({ clientAdded: true });
                this.props.setClient(res.data)
                console.log("client added")
            })
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
        if (!this.state.clientAdded) {
            return (
                <div>
                    <Header />
                    <Container
                        classes="ClientInput"
                    >
                        <form>
                            <FormGroup>
                                <Label text="First Name" />
                                <Input
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    type="firstName"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Last Name" />
                                <Input
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    type="lastName"
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
                                <Label text="Street Address" />
                                <Input
                                    name="streetAddress"
                                    value={this.state.streetAddress}
                                    onChange={this.handleInputChange}
                                    type="streetAddress"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text="Apartment/Unit Number" />
                                <Input
                                    name="aptUnitNum"
                                    value={this.state.aptUnitNum}
                                    onChange={this.handleInputChange}
                                    type="aptUnitNum"
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
                                    this.state.firstName && this.state.lastName && this.state.email && this.state.phone && this.state.streetAddress && this.state.city && this.state.state && this.state.zip && this.state.assessor && this.state.dwelling && this.state.audit ? "" : "disabled"
                                }
                                text="Begin Assessment"
                                onClick={this.addClient}
                                classes="btn-primary"
                            />
                        </form>
                    </Container>
                </div>
            );
        } else {
            return (
                <Redirect to="/assessment" />
            )
        }
    }
}

export default ClientInput;
