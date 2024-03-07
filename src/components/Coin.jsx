import React from 'react'

function Coin({coin, onSelectCoin}) {
    return (
        <li onClick={() => onSelectCoin(coin)}>
          <img src={coin.Icon} alt={`${coin.Coin}`} />
          <h3>{coin.CoinAcr}</h3>
          <div>
            <p>
              <span>{coin.Coin}</span>
            </p>
          </div>
        </li>            
        );
}

export default Coin