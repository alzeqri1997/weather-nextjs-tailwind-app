import Image from 'next/image';
import { ctoF } from '../services/converters';

export default function MainCard(props) {
  const { city, country, iconName, systemUsed, weatherData, description } =
    props;
  return (
    <div className="basis-1/4">
      <div className="m-8">
        <h1 className="text-4xl m-4">
          {city}
          {country && ','}
          {country}
        </h1>
        <h3 className="m-4 text-gray-400">{description}</h3>
        <Image
          alt="weatherIcon"
          width="200"
          height="200"
          src={`/icons/${iconName}.svg`}
        />
        <p className="text-5xl m-4">
          {systemUsed == 'metric'
            ? Math.round(weatherData.main.temp)
            : Math.round(ctoF(weatherData.main.temp))}
          °{systemUsed == 'metric' ? 'C' : 'F'}
        </p>
        <p className="m-4 text-gray-400">
          Feels like{' '}
          {systemUsed == 'metric'
            ? Math.round(weatherData.main.feels_like)
            : Math.round(ctoF(weatherData.main.feels_like))}
        </p>
      </div>
    </div>
  );
}
