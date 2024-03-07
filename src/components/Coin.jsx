import React from 'react'

function Coin({coin}) {
    return (
        <li>
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