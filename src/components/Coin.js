import React, { Component } from 'react';
import { axios } from 'axios';
import { cards } from '../style/cards.css';
import { connect } from 'react-redux';
import { HistoryCoin } from '../actions/index';


const mapDispatchToProps = dispatch => {
    return{
        HistoryCoin : history => dispatch(HistoryCoin(history))
    }
};


class Coin extends Component{
    

    FetchDataCoin = () => {

        fetch(`https://broker.negociecoins.com.br/api/v3/${this.props.type}/ticker`).then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
           
            this.setState({ticker: responseJSON});

            this.props.HistoryCoin({buy: responseJSON.buy, who: this.props.coin});

        })
        .catch(err => {
            console.log(err);
        });
    }
    
    componentWillMount(){
        
        this.setState({
            type: this.props.type,
            coin : this.props.coin,
            ticker: {},                       
            ask: {},
            bid: {} 
        });
    }
    render(){        
        
        setTimeout(() => {
            this.FetchDataCoin();
        }, 5000);

        return(
               
        <div className="card">
            <img className="coins" src={"../assets/bitcoin_pc.jpg"} />
         <div className="info">
                        <div className="titleInformation">
                            <h2>{this.state.coin}</h2>
                            {this.props.objeto}
                        </div>
                        <div className="information">
                            <hr />
                                <p>Higher value: {this.state.ticker.high}</p>
                                <p>Lower value: {this.state.ticker.low}</p>
                            <hr />
                            <h4>Changes</h4>
                                <p>Buy: {this.state.ticker.buy}</p>
                                <p>Sell: {this.state.ticker.sell}</p>
                        </div>
                    </div>               
                </div>           
        );
    }
}

export default Coin = connect(null,mapDispatchToProps)(Coin);
