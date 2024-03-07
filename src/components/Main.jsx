import React from 'react'
import CoinList from './CoinList';

function Main({coins}) {
    return(
        <main className="main">
  
          <CoinList coins = {coins}/>
  
          <div className="boxtwo">
            <h1 className='header'>My Cryptos</h1>
             
          </div>
        </main>
    );
}

export default Main