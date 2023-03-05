import React, { useState, useEffect } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import Pagination from './pagination';
import { IoIosArrowForward } from "react-icons/io";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [currentpage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const[name, setName]=useState('')
  const lastPostIndex = currentpage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const nav = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  const currentCountries = filteredCountries.slice(firstPostIndex, lastPostIndex);
  
 function showCountry(name){
    setName(name)
   // console.log(name);
    nav("/mypage", { state:name});
  }
  
  return (
    <div className='main'>
    <div className='header'><h1 className='hh1'>Country</h1> 
    <input type="text" onChange={handleSearch} placeholder="Search by country name" className='search'/>
    </div>
    <div className='list'>
      <table >
      <tr>
        <th>Flag</th>
        <th>Name</th>
        <th>Region</th>
        <th>Population</th>
        <th>Lamguage</th>
        <th></th>
      </tr>
        {currentCountries.map(country => (
          <tr>
          <td>
          <img className='image' src={country.flags.svg} alt=" "></img></td>
          <td>{country.name.common}</td>
          <td>{country.region}</td>
          <td>{country.population}</td>
            {<ul>  {Object.values(country.languages || {}).map(language => (
                <li key={language}>{language}</li>
              ))}</ul>}
             
          <td className='stateB'>
          <button  onClick={()=>showCountry(country.name.common)}><IoIosArrowForward/></button></td>
           </tr>       
        ))}     
      </table>
      </div>
      <div className='div2'>
      <Pagination totalPosts={countries.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentpage}
            currentPage={currentpage}
            setPostsPerPage={setPostsPerPage}
      ></Pagination>
      </div>
    </div>
  );
};

export default Country;
