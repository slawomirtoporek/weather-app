import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = props => {

  const [weatherData, setWeatherData] = useState('');
  const [pending, setPending] = useState(false);

  const handleCityChange = useCallback(city => {

    setPending(true);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c10111407243349ece9cd8bba4a7a1ad&units=metric`)
    .then(res => res.json())
    .then(data => {
      setPending(false);
      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].main
      });
    });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      { (weatherData && pending === false) && <WeatherSummary {...weatherData} /> }
      <Loader />
    </section>
  )
};

export default WeatherBox;