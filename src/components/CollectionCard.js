import React from 'react';
import './CollectionCard.css';

const CollectionCard = ({ id, name, traits, image }) => {
    // Function to format the price if it's a number
    const formatPrice = (value) => {
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'ETH' });
        }
        return 'N/A';
    };

    return (
        <div className='collectionCard'>
            <img 
                src={image || 'default-image.png'} // Fallback image in case the image is missing
                alt={name || 'NFT'}
                className='nftImage'
            />
            <div className='details'>
                <div className='name'>
                    {name || 'Unnamed Collection'} 
                    <div className='id'> .#{id || 'N/A'}</div>
                </div>

                
            </div>
        </div>
    );
};

export default CollectionCard;