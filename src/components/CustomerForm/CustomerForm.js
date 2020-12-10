import React, { Component } from 'react';
import { connect } from 'react-redux';




class CustomerForm extends Component {

    state = {
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: {
            pickup: false,
            delivery: false
        },
        total: ''
    }

    typeConditionalPickup = () => {
        this.setState({
            type: {
                pickup: !this.state.type.pickup
            }
        })
    }

    typeConditionalDelivery = () => {
        this.setState({
            type: {
                pickup: !this.state.type.delivery
            }
        })
    }

    addCustomer = () => {

    }

    render() {
        return (
            <section>
                <h2>Your Information</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input required placeholder="Name" type="text"></input>
                    <label>Street Address: </label>
                    <input required placeholder="Street Address" type="text"></input>
                    <label>Zip Code</label>
                    <input required placeholder="Zip Code"></input>
                    <label>Total</label>
                    <input required placeholder="Total">$</input>
                    <label>Pickup or Delivery?</label>
                    <input onClick={this.typeConditionalPickup} type="checkbox" id="pickup" name="Pickup" value={this.state.pickup}></input>
                    <input onClick={this.typeConditionalPickup} type="checkbox" id="delivery" name="Delivery" value={this.state.delivery}></input>
                    <p>Delivery or Pickup: {this.state.type.pickup ? 'Pickup' : 'Delivery'}</p>
                </form>
            </section>
        )
    }
}
export default connect()(CustomerForm);