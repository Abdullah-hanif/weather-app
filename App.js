import React,{useState,useEffect} from "react";
import Input from './components/Input/index';
import "./components/css/style.css";
 
function App() {

  const  [city,setCity] = useState(null);
  const[search,setSearch] = useState("karachi");
  
  
  useEffect(() => {
  const fetchApi = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e897d31900760aefc440b3f0109aa75`


  const response = await fetch(url);
  
  const resJson= await response.json();
//  console.log(resJson)  ;
setCity(resJson.main);
}


  fetchApi ();
  },[search] )
  return (
    <div className="box" >
      <div className="inputData">
        <Input type="search"
        value={search}
          placeholder="enter your city"
          onChange={(event) => {setSearch(event.target.value) }}
        />
      </div>

    {!city ? (
      <p> not data found</p>
    ): (
<div>
<h2>
       {search}
      </h2>
      <h1>
       {city.temp}*cel
      </h1>
      <h3>
        min  : {city.temp_min} *cel | max : {city.temp_max}*cel
      </h3>
      </div>
    )}

      
    
    </div>
  );
}

export default App;
