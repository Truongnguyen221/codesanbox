import { useEffect, useState, React } from "react";

const Weather = (props) => {
  const [searchMap, setSearchMap] = useState("");
  const [weatherData, setweatherData] = useState({});
  const handleChange = (e) => {
    setSearchMap(e.target.value)
  };
  useEffect(() => {
    const handleFetchListBlogs = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=HANOI&units=metric&appid=53d2b9e5ffc4c41135c1487777c28306`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setSearchMap(data);
        });
    };

    handleFetchListBlogs();
  }, []);

  return (
    <div>
      <form className="formdata">
        <input className="seachcheck" type="text" onChange={handleChange}></input>
        <button className="checksubmit" type="submit">Search</button>
      </form>

      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Weather;
