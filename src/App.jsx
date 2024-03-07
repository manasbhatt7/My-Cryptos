import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
import { coinData } from './Data';

function App() {
  const [coins, setCoins] = useState(coinData);
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <>
    <NavBar/>
    <Main coins = {coins} selectedCoin = {selectedCoin}/>
    </>
  )
}

export default App
