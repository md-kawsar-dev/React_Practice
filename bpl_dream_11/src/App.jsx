import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
function App() {
  const [totalCoins, setTotalCoins] = useState(10);
  return (
    <div className='container mx-auto'>

      <Header totalCoins={totalCoins} />
      <Banner />

    </div>
  )
}

export default App
