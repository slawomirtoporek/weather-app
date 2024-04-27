import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {

  const handleCityChange = useCallback(city => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?
      q=${city}&appid=8f5f69515d5bdcf639c047934a208169&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;