import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';


class App extends Component {

  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    // tell axios to make a get call, then dispatch the array results
    axios.get ('/api/pizza').then( (response) => {
      console.log (`get`, response.data);
      // dispatch Array results
      this.props.dispatch ({type: 'GET_PIZZAS' , payload: response.data })

    }).catch ( (err ) => {
      console.log (`Error in Get`, err);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        {JSON.stringify()}
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Order</Link></li>
              <li><Link to="/CustomerForm"></Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={PizzaList} />
          <Route exact path="/CustomerForm" component={CustomerForm} />
          <Route exact path="/Checkout" component={Checkout} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(App);
// export default App;
 
