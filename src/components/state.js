import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css'
import { Link,useNavigate  } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImLocation } from "react-icons/im";

export default function Mypage() {
    const nav = useNavigate();

    const location = useLocation();
    const data = location.state;
      const [countryInfo, setCountryInfo] = useState({ name: '', region: '', population: '', image:'', capital: '', subregion:'', lat:'', lng:'', maps:'', independent: '', common:'', borders: '' });

      useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/'+ data)
          .then(response => response.json())
          .then(data => {
            const { name, region, population, flags, capital, subregion, latlng, maps, independent, borders } = data[0];
            setCountryInfo({ name: name.common, region: region, population: population, image:flags.svg, capital:capital[0], subregion:subregion, lat: latlng[0], lng: latlng[1], maps: maps.googleMaps, independent:independent, common: name.official, borders: borders });
          })
          .catch(error => console.error(error));
      }, []);
    console.log(countryInfo.maps);
    let path = countryInfo.maps;
    let ind = countryInfo.independent;
    let letter = data.charAt(0); 

    const myContent = "The official name of this country is " + countryInfo.common + ". It shares border with " + (countryInfo.borders) +".";
    const limit = 0;
    const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);
  const displayContent = isExpanded ? myContent : myContent.slice(0, limit);

  return (
    <div className='cont'>
    <div className='cont2'>
        <div className='header2'>
        <div className='circle'><h1 className='cp'>{letter}</h1></div>
        <div className='subheader2'>
        <h1>{data}</h1>
        <p>{countryInfo.capital}</p>
        </div>
        </div>
        <img className='image2' src={countryInfo.image} alt=" "></img>
        <p className='text2'>This country belongs to {countryInfo.region} region and {countryInfo.subregion} sub-region. Location at the {countryInfo.lat} N and {countryInfo.lng} W, this country has population of {countryInfo.population}. It's {ind===true?"an independent country" : "a non independent country"}, according to the CIA World Factbook. {displayContent}</p>
        <div className='footer'>
            <div className='subfooter'>
            <Link to='/'> <button className='inbutton'><IoIosArrowBack/></button></Link>
            <button className='gobtn' onClick={(e) => {
            e.preventDefault();
            window.location.href=path;
            }}><ImLocation/></button>
            </div>
            <div>{myContent.length > limit && (
          <button onClick={toggleIsExpanded} className="showmore">
            {isExpanded ? <IoIosArrowUp/> : <IoIosArrowDown/>}
          </button>
        )}</div>
        </div>
    </div>
    </div>
    
  )
}
