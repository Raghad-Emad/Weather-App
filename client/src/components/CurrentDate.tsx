import "./CurrentDate.css";

const CurrentDate: React.FC = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date as desired (e.g., "Friday 20, 2022")
  const formattedDate = `${getWeekday(
    currentDate
  )} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  // Function to get the weekday
  function getWeekday(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <div className="CurrentDate">
      <p>{formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
