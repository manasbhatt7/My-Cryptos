import React from 'react'

function CoinDetails({selectedCoin}) {
    const classNames = ["sameline"];
    if (selectedCoin.Value < 0) { classNames.push("text-warning"); }
    
      return <>
      <div className="container">
        <img src={selectedCoin.Icon} alt={`${selectedCoin.Coin}`} />
        <div className="innerContainer">
            <div>
              <h1>{selectedCoin.Coin}</h1>
              <h2 className="greyfont">{selectedCoin.CoinAcr}</h2>
            </div>
            <div>
              <div className={classNames.join(' ')}>
                <h1>{selectedCoin.Value}</h1> 
                <h2>({selectedCoin.perc}%)</h2>
                {selectedCoin.Value>0 ? (<div>🔼</div>):(<div>🔽</div>)}
              </div>  
              <h3 className="greyfont">CHANGE</h3>
            </div>  
            <hr />
            <div className="buyNsell">
              <div>
                <h2>{selectedCoin.Buy}</h2>
                <h3 className="greyfont">Buy</h3>
              </div>
              <hr />
              <div>
                <h2>{selectedCoin.Sell}</h2>
                <h3 className="greyfont">Sell</h3>
              </div>
            </div>
        </div>
      </div>
      </>
}

export default CoinDetails