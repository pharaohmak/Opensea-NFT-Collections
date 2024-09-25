import React, { useState, useEffect } from 'react';
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png'; // Fixed typo from 'tweeterLogo'
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(selectedPunk);

    useEffect(() => {
        setActivePunk(punkListData.find(punk => punk.collection === selectedPunk)); // Find the selected punk based on its collection name
    }, [selectedPunk, punkListData]);

    if (!activePunk) return null; // Return early if activePunk is not yet available

    return (
        <div className='main'>
            <div className='mainContain'>
                <div className='punkHighlighter'>
                    <div className='punkContainer'>
                        <img
                            className='selectedPunk'
                            src={activePunk.image_url || 'default-image.png'} // Use default image if image is missing
                            alt={activePunk.name || 'NFT'}
                        />
                        <div className='punkDetails' style={{ color: '#fff' }}>
                            <div className='title'>{activePunk.name || 'Unnamed Collection'}</div>
                            <span className='itemNumber'>.#{activePunk.collection || 'N/A'}</span>
                        </div>
                        
                    </div>
                            <div className='ownerDetails'>
                                <div className='ownerNameAndHandle'>
                                    <div>{activePunk.owner?.address || 'Unknown Owner'}</div>
                                    <div className='ownerHandle'>Address: {activePunk.owner}</div>
                                </div>
                                <div className='ownerLink'>
                                    <img src={instagramLogo} alt='Instagram' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={twitterLogo} alt='Twitter' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon} alt='More' />
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Main;