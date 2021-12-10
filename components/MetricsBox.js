import MetricsCard from './MetricsCard';
import {
  getWindSpeed,
  getVisibility,
  getAMPM,
  getTime,
} from '../services/helpers';
import { degToCompass } from '../services/converters';

export default function MetricsBox({ weatherData, systemUsed }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <MetricsCard
        title={'Humidity'}
        iconSrc="/icons/humidity.png"
        metric={weatherData.main.humidity}
        unit={'%'}
      />
      <MetricsCard
        title="Wind Speed"
        iconSrc="/icons/wind.png"
        metric={getWindSpeed(systemUsed, weatherData.wind.speed)}
        unit={systemUsed == 'metric' ? 'm/s' : 'm/h'}
      />

      <MetricsCard
        title="Wind direction"
        iconSrc="/icons/compass.png"
        metric={degToCompass(weatherData.wind.deg)}
      />

      <MetricsCard
        title={'Visibility'}
        iconSrc={'/icons/binocular.png'}
        metric={getVisibility(systemUsed, weatherData.visibility)}
        unit={systemUsed == 'metric' ? 'km' : 'miles'}
      />

      <MetricsCard
        title={'Sunrise'}
        iconSrc={'/icons/sunrise.png'}
        metric={getTime(
          systemUsed,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        unit={getAMPM(
          systemUsed,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
      />

      <MetricsCard
        title={'Sunset'}
        iconSrc={'/icons/sunset.png'}
        metric={getTime(
          systemUsed,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
        unit={getAMPM(systemUsed, weatherData.sys.sunset, weatherData.timezone)}
      />
    </div>
  );
}
