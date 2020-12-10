import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaListItem extends Component {

    state = {
        showAdd: true,
    }

    togglAddRemove = () => {
        this.setState({
            showAdd: !this.state.showAdd // flip the boolean using ! NOT
        })
    }

    render() {

        return (
            <div className="card">
                <h1>hello from PizzaListItem</h1>

                {/*<h2>{this.props.pizza.name}</h2>
            <p>description: {this.props.pizza.description}</p>
            <p>price: {this.props.pizza.price}</p>
            <section>
            { this.state.showAdd && // if this part is false, the next part won't show
                `Name: ${this.props.pizza.name}` } 
            </section> */}

                <button onClick={this.togglAddRemove}>
                    {this.state.showAdd ? `Add Pizza!` : `Remove Pizza!`}
                </button>

            </div>
        )
    }
}
export default PizzaListItem;