import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header.js';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x07EA1D95fAEb5aE4bF8b756197b3bFCcCFB8Dc5A');
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
      // return openseaData.data.assets;
    }
    getMyNfts();
  }, []
  )
  return (
    <div className='app'>
      <Header></Header>
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}

    </div>
  );
}

export default App;