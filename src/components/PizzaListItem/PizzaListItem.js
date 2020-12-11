import React, { Component } from 'react';
import { connect } from 'react-redux';


class PizzaListItem extends Component {

    state = {
        showAdd: true,
        pizzaChoice: ''
    }

    togglAddRemove = () => {
        this.setState({
            showAdd: !this.state.showAdd // flip the boolean using ! NOT
        })
        this.addPizza()
    }

    addPizza = () => {
        if (this.state.showAdd === true) {
            this.setState({
                pizzaChoice: this.props.pizza.id
            })
            console.log('PizzaListItem addPizza state is true', this.props.pizza.id)
        }
        else if (this.state.showAdd === false) {
            console.log('PizzaListItem addPizza state is false')
        }
    }

    sendToStore = () => {
        
    }

    render() {

        return (
            <div className="card">
              <div>
                  <img  src={this.props.pizza.image_path} alt={this.props.pizza.description}/>
              </div>

                <h2>{this.props.pizza.name}</h2>
            <p>description: {this.props.pizza.description}</p>
            <p>price: {this.props.pizza.price}</p>
            <section>
            { this.state.showAdd && // if this part is false, the next part won't show
                `Name: ${this.props.pizza.name}` } 
            </section> 

                <button onClick={this.togglAddRemove}>
                    {this.state.showAdd ? `Add Pizza!` : `Remove Pizza!`}
                </button>

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(PizzaListItem);