import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, addTodo } from '../actions';
import { axios } from 'axios';  
import Coin from './Coin';
import {Router, withRouter} from 'react-router-dom';
import History from './History';
import * as HomeStyle from '../style/Home.css';

class Home extends Component {
  
  render() {

    return (

      <div>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <Coin type={'btcbrl'} coin={'Bitcoin'} />
          </div>
          <div className="col-md-4 offset-md-1">
            <Coin type={'ltcbrl'} coin={'LiteCoin'} />
          </div>
          <div className="col-md-4 offset-md-1">
            <History />
          </div>
        </div>
      </div>
      
    );
  }
}
export default Home;