import React, { useEffect, useState } from 'react'

import './uzvlerimiz.css';
import { IoMdPerson } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';

import './uzvlerimiz.css'
  

const Uzvlerimizhome = () => {
    const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4040/creators')
      .then(response => response.json())
      .then(data => setCreators(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (

    <div className='uzvhome'>
           <div className='uzvtop'>
       <div className='desktek destekonlayn destekuzv'>
        <p>ÜZVLƏRİMİZ</p>
                </div>
                <h2>Top bəxşiş toplayanlar</h2>
                <p>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.
</p>
                </div>
                 
    <div className='creators creatoruuzv'>
        {creators.map(creator => (
          <div key={creator.id} className='creator-card'>
            <img src={creator.image1} alt={creator.name} className='creator-image' />
            <div className='creator-details'>
  <h4>{creator.name}</h4>
  <p className='creatordetailp'>{creator.description}</p>
  <p className='creatordestek'>
    <IoMdPerson /> {creator.destekci}
  </p>
  <div className='iconofcreator'>
    {creator.icon === 'FaTiktok' && <FaTiktok className='fatiktokuzv'/>}
    {creator.icon === 'CiGlobe' && <CiGlobe className='fatiktokuzv'/>}
    {creator.icon2 === 'FaTiktok' && <FaTiktok className='fatiktokuzv'/>}
    {creator.icon2 === 'CiGlobe' && <CiGlobe className='fatiktokuzv'/>}
  </div>
</div>

          </div>
        ))}
      </div>
      </div>
  )
}

export default Uzvlerimizhome