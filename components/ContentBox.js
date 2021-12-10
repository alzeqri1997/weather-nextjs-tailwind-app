import MetricsBox from './MetricsBox';

export default function ContentBox(props) {
  const { setSearchQuery, searchQuery, systemUsed, weatherData } = props;
  const getDate = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    hour: 'numeric',
  });

  const handleSubmit = (e) => {
    if (e.key == 'Enter') {
      if (!e.target.value) return;
      setSearchQuery(e.target.value);
    }
  };
  return (
    <div className="basis-4/5 bg-gray-50 px-4">
      <div className="flex items-center justify-between border-b border-gray-100 ">
        <h3 className="">{getDate}</h3>
        <input
          className="my-4 p-2 bg-gray-100 rounded-lg"
          value={searchQuery}
          placeholder="Country Name"
          type="text"
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
        />
      </div>

      <MetricsBox weatherData={weatherData} systemUsed={systemUsed} />
    </div>
  );
}
