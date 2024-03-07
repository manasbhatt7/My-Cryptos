import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
import { coinData } from './Data';

function App() {
  const [coins, setCoins] = useState(coinData);
  const [selectedCoin, setSelectedCoin] = useState(null);

  function handleSelectedCoin(coin){
    setSelectedCoin(coin);
  }

  return (
    <>
    <NavBar/>
    <Main coins = {coins} selectedCoin = {selectedCoin} onSelectCoin = {handleSelectedCoin}/>
    </>
  )
}

export default App
