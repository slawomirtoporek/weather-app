import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWeather } from '../../redux/weatherRedux';

const WeatherBox = () => {

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch(); 

  const handleCityChange = useCallback(city => {
    setPending(true);
    setError(false);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c10111407243349ece9cd8bba4a7a1ad&units=metric`)
    .then(res => {
      if(res.status === 200) {
        return res.json()
        .then(data => {
          setPending(false);
          dispatch(addWeather({
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main
          }));
        });
      } else {
        setError(true);
      }
    });
  }, [dispatch]);

  return (
    <section>
      <PickCity action={handleCityChange} />
      { !pending && !error && <WeatherSummary /> }
      { pending && !error && <Loader /> }
      { error && <ErrorBox>There is no such city!</ErrorBox> }
    </section>
  )
};

export default WeatherBox;