import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-api-key': 'ddc30c7b2ea145039ee85956c5d6624e' // Ensure this key is valid for testnet
          }
        };

        // Update the URL to the new testnet endpoint
        const response = await axios.get('https://api.opensea.io/api/v2/collections', options);
        const data = response.data;

        if (response.status === 200) {
          console.log(data);
          
          // Filter out collections with "Flower" in their name
          const filteredCollections = data.collections.filter(
            (collection) => !collection.name.includes("Flower")
          );

          setPunkListData(filteredCollections); // Update state with filtered collections

          // Select the first item from filtered collections
          if (filteredCollections.length > 0) {
            setSelectedPunk(filteredCollections[0]); // Select the first filtered item by default
          }
        } else {
          console.error("Failed to fetch data:", data);
        }
      } catch (err) {
        console.error("Error occurred:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='app'>
      <Header />
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