import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

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
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(App);
// export default App;
 
