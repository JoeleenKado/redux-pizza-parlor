// ArtistList.js
import { connect } from 'react-redux';

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
//render from reducer
class ArtistList extends Component {
  refreshPizzas = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      console.log(response);
    {/*  // response.data will be the array of artists
      // this.setState({
      //   artists: response.data, 
      //   });*/}
        this.props.dispatch({type: 'ADD_ARTIST', payload: response.data })

    });
  }
  
        createPizzaList() {
        let artistListForDom = [];
        console.log(this.props.reduxState);
        for(let i = 0; i < this.props.reduxState.pizzaReducer.length; i += 1) {
            let artist = this.props.reduxState.pizzaReducer[i];
            console.log(artist);
            let pizzaRow = (<PizzaListItem key={i} refreshPizzas={this.props.refreshPizzas} pizza={pizza} />);
            artistListForDom.push(artistRow);
        }
        return artistListForDom;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.createPizzaList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});


export default connect(putReduxStateOnProps)(PizzaList);












  