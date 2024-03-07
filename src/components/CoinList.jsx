import React from 'react'
import Coin from './Coin';
import { useState } from 'react'

function CoinList({coins, onSelectCoin}) {
    const [query, setQuery] = useState("");

    return(
      <div className="boxone">
            <div className="num-results">
            Cryptos <strong>({coins.length})</strong> 
          </div>
            <div>
              <input
                className="search"
                type="text"
                placeholder="🔍 Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
              <ul className="list list-coins">
                {coins?.filter(coin=>coin.Coin.toLowerCase().includes(query)).map((coin) => (
                  <Coin coin = {coin} key={coin.coinId} onSelectCoin={onSelectCoin}/>
                ))}
              </ul>
          </div>
    );
}

export default CoinList