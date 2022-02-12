import './App.css';
import Header from './components/Header';

import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import { Main } from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x2CCfaE0591DE984f4d141dff22284596bc6dC285');
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