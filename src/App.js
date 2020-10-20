import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import SearchIcon from '@material-ui/icons/Search';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import NotFound from './NotFound';
const api_key ="a823b835e1c83da4f1c4496c375db236";

function App() {
  const [data, setdata] = useState([])
  const [ city, setcity] = useState(undefined);
  const [country, setcountry] = useState(undefined)
  const [temp, settemp] = useState(undefined)
  const [mintemp, setmintemp] = useState(undefined)
  const [maxtemp, setmaxtemp] = useState(undefined)
  const [weather, setweather] = useState(undefined);
  const [input, setinput] = useState(undefined)
  const[icon, seticon] = useState(undefined);
  const[iconid, seticonid] = useState(304);
  const [open, setopen] = useState(false)
  const [windspeed, setwindspeed] = useState(undefined)
  const [addcls, setaddcls] = useState("header")
  const[found,setfound] = useState(false);
const celcius=(int)=>{
  const cel = Math.floor(int-273.15)
  return cel;
};
const Weathericon=(iconid)=>{
  
  switch (true) {
    case iconid > 801 && iconid < 805:
      seticon(faCloud);
      break;
      case iconid = 800:
      seticon(faAirFreshener);
      break;
      case iconid > 700 && iconid > 781:
      seticon(faWind);
      break;
      case iconid > 600 && iconid > 622:
      seticon(faSnowflake);
      break;
      case iconid > 500 && iconid < 532 :
      seticon(faCloudRain);
      break;
      case iconid > 300 && iconid < 322 :
        seticon(faCloudMoonRain);
        break;
        case iconid > 199 && iconid < 233 :
        seticon(faCloudSunRain);
        break;
    default: 
    seticon(faCloudSun);
      break;
  }
};

const getinput=(e)=>{
  
setinput(e.target.value);


};







//*********************************************contact====Email: devichandinikhiya@gmail.com  ********** */
const movenow=()=>{
  setaddcls("move")
};
 const getWeather = async () => {
   try {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`)
 
    const responce = await api_call.json();
    
    seticonid(Weathericon(responce.weather[0].id))
    console.log(responce);
    setcity(responce.name);
    setcountry(responce.sys.country);
    settemp(celcius(responce.main.temp))
    setmintemp(celcius(responce.main.temp_min))
    setmaxtemp(celcius(responce.main.temp_max))
    setweather(responce.weather[0].description)
    setwindspeed(responce.wind.speed)
    setopen(true);
   } catch (error) {
        setfound(true);
   }
  
 

  };
 
  return (
    <div className='app'>
    <div className={addcls}>WEATHER APP </div>
    <div className='app_top'>
    <form onSubmit={()=>{getWeather();}}>
    <input onFocus={movenow}  placeholder='Enter City ..' onChange={getinput}></input></form>
    <SearchIcon onClick={()=>{getWeather();}} /></div> 
 {open ?  <Weather name={city}
     country={country} 
     temp={temp}
     weather={weather}
     icon={icon}
    maxtemp={maxtemp}
    mintemp={mintemp}
    wind={windspeed}
     /> : found? <NotFound /> : ""}
     <center>DEVELOPED WITH❤️ BY <a className="link" href="https://www.instagram.com/dev_inikhiya/" >  DEV INIKHIYA</a></center>
    </div>
);
}

export default App;
