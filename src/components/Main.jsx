import React from 'react'
import CoinList from './CoinList';
import CoinDetails from './CoinDetails';

function Main({coins, selectedCoin, onSelectCoin}) {
    return(
        <main className="main">
  
          <CoinList coins = {coins} onSelectCoin={onSelectCoin}/>
  
          <div className="boxtwo">
            <div className='logom'>
            <span role="img">🪙</span>
            <h1 className='header'>My Cryptos</h1>
            </div>
            {
              selectedCoin ? <CoinDetails selectedCoin={selectedCoin}/> : <h2>Select from the left drawer</h2>
            }
          </div>
        </main>
    );
}

export default Main