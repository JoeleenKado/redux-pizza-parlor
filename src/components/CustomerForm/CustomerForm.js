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
        this.props.history.push('/Checkout')
    }

    render() {
        return (
            <section>
                <h2>Your Information</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input required placeholder="Name" type="text" />
                    <label>Street Address: </label>
                    <input required placeholder="Street Address" type="text" />
                    <label>Zip Code</label>
                    <input required placeholder="Zip Code" />
                    <label>Total</label>
                    <label>$</label>
                    <input required placeholder="Total" />
                    <label>Pickup?</label>
                    <input onClick={this.typeConditionalPickup} type="checkbox" id="pickup" name="Pickup" value={this.state.pickup} />
                    <label>Delivery?</label>
                    <input onClick={this.typeConditionalPickup} type="checkbox" id="delivery" name="Delivery" value={this.state.delivery} />
                    <p>Delivery or Pickup: {this.state.type.pickup ? 'Pickup' : 'Delivery'}</p>
                    <button onClick={this.addCustomer}>Next</button>
                </form>
            </section>
        )
    }
}
export default connect()(CustomerForm);