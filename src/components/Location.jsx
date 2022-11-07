
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = ({ boxSearch, setBoxSearch }) => {

  const [location, setLocation] = useState([]);


  useEffect(() => {
    const random = Math.floor(Math.random() * 126)
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocation(res.data))


    let arrayLocation = [];
    for (let i = 1; i < 127; i++) arrayLocation.push(i);

    axios.get(`https://rickandmortyapi.com/api/location/${arrayLocation}`)
      .then(res => setSearch(res.data))

  }, [])


  const [id, setId] = useState("");


  const changeId = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setLocation(res.data))

  }

  const [search, setSearch] = useState([]);

  const filteredLocation = search.filter(loc => (loc.name.includes(id) || loc.id === Number(id)));


  return (
    <>
      <section className='search background'>
        <div>
          <input
            type="text"
            className='input-search'
            onClick={() => setBoxSearch(!boxSearch)}
            onKeyDown={(e) => { e.key === 'Enter' && changeId(id) }}
            onChange={
              (e) => {
                setId(e.target.value);
                (e.target.value) === "" ? setBoxSearch(false) : setBoxSearch(true)
              }
            }
            value={id}
            placeholder='search for id (1-126) or location' />

          <button
            onClick={changeId}
            className='search-btn'
          >
            <span className="material-symbols-outlined">
              search
            </span>
          </button>
        </div>

       {
            boxSearch && (
              <div className='box_result-search'>
                {
                  filteredLocation.map(loc => (
                    <button
                      className='results-button'
                      onClick={
                        () => {
                          setId(loc.id);
                          setBoxSearch(false);
                        }}
                      key={loc.name}
                    >  "{loc.name}"
                      <span> id {loc.id} </span>
                    </button>
                  ))
                }
              </div>
            )
          }

      </section>

     

      <section
        className='info-location'
        onClick={() => setBoxSearch(false)}
      >
        <h1>Location </h1>
        <h2> {location.id} - "{location.name}" </h2>
        <ul>

          <li>
            <b> Type </b> <br />
            {location.type}
          </li>

          <li>
            <b> Dimensíon </b> <br />
            {location.dimension === '' ? 'unknow' : location.dimension}
          </li>

          <li>
            <b> Population </b> <br />
            {location.residents?.length}
          </li>

        </ul>
      </section>

      <h1>Residents</h1>

      <section
        className='container-residents'
        onClick={() => setBoxSearch(false)}
      >

        {location.residents?.length === 0 && <h1>"There are no residents at this location"</h1>}
        {(location.residents)?.map(urlResident => (
          <ResidentInfo urlResident={urlResident} key={urlResident} />
        ))}
      </section>

    </>
  );
};

export default Location;