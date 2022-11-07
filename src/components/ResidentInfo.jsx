import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResidentInfo = ({ urlResident }) => {

  const [resident, setResident] = useState({})

  useEffect(() => {
    axios.get(urlResident)
      .then(res => setResident(res.data))
  }, []);


  return (
    <section className='card-resident'>
      <img src={resident.image} alt="resident" />
      <div>
        <h2>{resident.name}</h2>
        <ul>
          <li 
            id='status-resident' 
            style={{color: resident.status === 'Alive' ? 'chartreuse' : 'red'}} >
            <span><b>{resident.status}</b></span>
          </li> 
          <li><b>Specie:</b> {resident.species}</li>
          <li><b>Origin:</b> {resident.origin?.name}</li>
          <li><b>Where episodes appears:</b> {resident.episode?.length}</li>
        </ul>

      </div>
    </section>
  );
};

export default ResidentInfo;