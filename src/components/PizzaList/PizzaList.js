import { connect } from "react-redux";
import React, { Component } from "react";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
class PizzaList extends Component {
  clickHandler = () => {
    this.props.history.push("/CustomerForm");
  };

  render() {
    return (
      <div className="pizzaList">
        <h2>Pizza-Pizza!</h2>
        <ul>
          {this.props.reduxStore.pizzaList.map((pizza, index) => {
            return <PizzaListItem key={index} pizza={pizza} />;
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
