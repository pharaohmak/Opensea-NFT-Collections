import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [filteredPunkList, setFilteredPunkList] = useState([]); // New state for filtered data
  const [selectedPunk, setSelectedPunk] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-api-key': process.env.REACT_APP_OPENSEA_API_KEY, // Ensure this key is valid for testnet
          },
        };

        const response = await axios.get('https://api.opensea.io/api/v2/collections', options);
        const data = response.data;

        if (response.status === 200) {
          console.log(data);

          const filteredCollections = data.collections.filter(
            (collection) => !collection.name.includes('Flower') // Filter out unwanted collections
          );

          setPunkListData(filteredCollections); // Store all collections
          setFilteredPunkList(filteredCollections); // Initially set filtered data to all collections

          if (filteredCollections.length > 0) {
            setSelectedPunk(filteredCollections[0]); // Select first filtered item by default
          }
        } else {
          console.error('Failed to fetch data:', data);
        }
      } catch (err) {
        console.error('Error occurred:', err);
      }
    }

    fetchData();
  }, []);

  // Search handler to filter punk list data based on search input
  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      const filtered = punkListData.filter((collection) =>
        collection.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPunkList(filtered); // Update the filtered list based on the search
    } else {
      setFilteredPunkList(punkListData); // Reset to original list when search is cleared
    }
  };

  return (
    <div className='app'>
      <Header onSearch={handleSearch} /> {/* Pass search handler to Header */}

      {filteredPunkList.length > 0 && (
        <>
          <Main punkListData={filteredPunkList} selectedPunk={selectedPunk} />
          <PunkList punkListData={filteredPunkList} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;