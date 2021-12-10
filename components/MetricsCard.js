import Image from 'next/image';

export default function MetricsCard({ title, iconSrc, metric, unit }) {
  return (
    <div className="rounded-lg flex flex-auto p-4 bg-gray-100">
      <Image alt="weatherIcon" width="70px" height="70px" src={iconSrc} />

      <div className="text-right flex-1">
        <p className="text-gray-400">{title}</p>
        <p className="text-2xl">{metric}</p>
        <p className=" text-xs">{unit}</p>
      </div>
    </div>
  );
}
