import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
import { coinData } from './Data';


function App() {
  const [coins, setCoins] = useState(coinData);

  return (
    <>
    <NavBar/>
    <Main coins = {coins} />
    </>
  )
}

export default App
