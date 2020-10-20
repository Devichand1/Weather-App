import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './weather.css';
function Weather(props) {
  const mnth = new Date().getMonth(); 
  const date = new Date().getDate();
  const day = new Date().getDay();
    const month=  [ "January", 'Fabuary', 'March', 'April', 'May', 'June' ,'July', 'August', 'September','October', 'November', 'December']
    const weak =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday' , 'Saturday']
    return (
        <div className="block">
            <div className="name">{props.name } ,{props.country}</div>
           <div className="dates"> 
           <div className='date'>{weak[day]} </div>
            <div className='date'> {date} </div>
            <div className='date'> {month[mnth]} </div>
           </div>
           <div className='details'>
           <div className="middle">
            <FontAwesomeIcon className="icon" icon={props.icon}  color="#FFF"/>
            <div className="middle_right"> <div className="temp">{props.temp}&#xb0;</div>
            <div>{props.weather}</div></div></div>
           <div className="bottom">
           
           <div className='box'><h3>{props.maxtemp}&#xb0;</h3><h3>MAX. TEMP.</h3></div> 
           <div className='box'><h3>{props.mintemp}&#xb0;</h3><h3>MIN. TEMP.</h3></div>
           <div className='box'><h3>{props.wind}mph</h3><h3>WIND</h3></div>
        
           </div>
        </div>
        </div>
    )
}

export default Weather
