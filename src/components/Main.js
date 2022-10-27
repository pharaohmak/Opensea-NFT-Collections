import React, { useState, useEffect } from 'react';
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import tweeterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedPunk, PunkListData }) => {

    const [activePunk, setActivePunk] = useState(PunkListData[0]);

    useEffect(() => {
        setActivePunk(PunkListData[selectedPunk])
    }, [PunkListData, selectedPunk])



    return (
        <div className='main'>
            <div className='mainContain'>
                <div className='punkHighlighter'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk.image_original_url} alt='' />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='tittle'>{activePunk.name}</div>
                    <span className='itemNumber'>.#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} alt='' />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@SashenHasindu</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={tweeterLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main