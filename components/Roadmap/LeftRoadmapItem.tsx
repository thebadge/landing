export default function LeftRoadmapItem({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12" />
      <div className="order-1 w-5/12 px-1 py-4 text-right">
        <p className="mb-3 text-base text-secondary-300 font-bold">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-600 dark:text-body-color text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}
