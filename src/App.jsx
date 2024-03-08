import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
// import { coinData } from './Data';
import { useSelector } from 'react-redux';
import { store } from './app/store';

function App() {
  const storecoin = useSelector((store)=> store.coin.coin);

  const [coins, setCoins] = useState(storecoin);
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
