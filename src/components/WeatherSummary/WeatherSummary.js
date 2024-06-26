import { useSelector } from 'react-redux';
import { getLastWeather } from '../../redux/weatherRedux';
import styles from './WeatherSummary.module.scss';

const WeatherSummary = ()  => {

  const weather = useSelector(getLastWeather);
 
  if (weather) {
    return (
      <section className={styles.weatherSummary}>
        <img
          className={styles.weatherIcon}
          alt={weather.description}
          src={`${process.env.PUBLIC_URL}/images/weather-icons/${weather.icon}.png`} />
        <div className={styles.weatherInfo}>
          <h2>{weather.city}</h2>
          <p>
            <strong>Temp:</strong> {weather.temp}°C
          </p>
        </div>
      </section>
    );
  };
};

export default WeatherSummary;