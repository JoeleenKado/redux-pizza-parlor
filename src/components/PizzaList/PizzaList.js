import { connect } from "react-redux";

import React, { Component } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
class PizzaList extends Component {
  clickHandler = () => {
    this.props.history.push("/customer-info");
  };

  render() {
    return (
      <div className="pizzaList">
        <h2>Pizza-Pizza!</h2>
        <ul>
          {this.props.reduxStore.pizzaList.map((pizza, index) => {
            return <PizzaItem key={index} pizza={pizza.id} />;
          })}
        </ul>
        <button onClick={this.clickHandler}>Next</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore,
});

export default connect(putReduxStateOnProps)(PizzaList);
