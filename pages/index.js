import { useState } from 'react';
import useSWR from 'swr';
import MainCard from '../components/MainCard';
import ContentBox from '../components/ContentBox';

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('yemen');
  const [systemUsed, setSystemUsed] = useState('metric');
  const { data: weatherData, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
    fetcher
  );

  return weatherData && !weatherData.message && !error ? (
    <div
      style={{ minHeight: '500px' }}
      className="grid place-items-center h-screen "
    >
      <div className="rounded-lg overflow-hidden min-w-min shadow-lg text-center bg-gray-100 flex ">
        <MainCard
          city={weatherData.name}
          country={weatherData.country}
          iconName={weatherData.weather[0].icon}
          systemUsed={systemUsed}
          weatherData={weatherData}
          description={weatherData.weather[0].description}
        />
        <ContentBox
          weatherData={weatherData}
          setSearchQuery={setSearchQuery}
          systemUsed={systemUsed}
        />
      </div>
    </div>
  ) : weatherData && weatherData.message ? (
    <h1>{weatherData.message}</h1>
  ) : (
    <h1>...loading</h1>
  );
}
