import React, { Component } from 'react';
import HistoryReducerCoin from '../reducers/HistoryReducerCoin';
import { connect } from "react-redux";

const mapStateToProps = state => {
      
      var _coin = state.HistoryReducerCoin;
      var data = [];
       //Just to show the last 10 results
       _coin.map((dado,i) =>
       {
          if(_coin.length - 10 <= i)
            data.push(dado);    
       });

       console.log(data);
       return {HistoryReducerCoin : data};       
    };
        
const ConnectedList = ({ HistoryReducerCoin }) => (

    <ul className="list-group list-group-flush">
   
      {HistoryReducerCoin.map((el,i) => (    
        <li className="list-group-item">
          Buy: {el.who} - {el.buy}
        </li>
      ))}
    </ul>
); 

export default connect(mapStateToProps)(ConnectedList);