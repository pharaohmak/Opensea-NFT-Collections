import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
        <div className="punkList">
            {punkListData
                .filter((item) => 
                    item.image_url && 
                    !item.name.startsWith('event') && // Exclude collections starting with 'event'
                    !item.name.endsWith('event') && // Exclude collections starting with 'event'
                    item.name !== 'event 2' && // Exclude collection named 'event 2'
                    !item.opensea_url.includes('/event-2') && // Exclude collections with '/event-2' in opensea_url
                    !item.name.endsWith('Follower') && // Exclude collections where the name ends with 'Flower'
                    item.contracts.chain !== 'base' // Exclude collections on the base chain
                )
                .map((item) => {
                    return (
                        <div 
                            key={item.collection} // Ensure the key prop is unique for each collection
                            onClick={() => setSelectedPunk(item.collection)} // Handle punk selection
                            className="punkItem"
                        >
                            <CollectionCard
                                id={item.collection} // Use collection as the unique ID
                                name={item.name || 'Unnamed Collection'} // Fallback to a default name if missing
                                traits={[]} // Empty array since there are no specific traits in the response
                                image={item.image_url || 'default-image.png'} // Use image_url
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default PunkList;