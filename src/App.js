import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header.js';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x2CCfaE0591DE984f4d141dff22284596bc6dC285order_direction=ascending'
        )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    }
    
    return getMyNfts()
  
  },[])


  return (
  <div className= 'app'>
    <Header />
    <CollectionCard 
    id={0} 
    name={'Captain Punk'} 
    traits={[{'value': 7}]} 
    image="https://ipfs.thirdweb.com/ipfs/bafybeibt2tj24qikiqiyw5a7lsp26qg4ryi3yyimh2z3d7m52r4ezcrhgi" 
    />
    <PunkList punkListData={punkListData} />
  </div> 
  ) 
    

}

export default App;
