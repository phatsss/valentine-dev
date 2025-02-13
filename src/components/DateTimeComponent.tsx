import { useEffect, useState } from "react";

const DateTimeComponent = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Vientiane",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // 24-hour format
      };

      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Vientiane",
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };

      setTime(new Intl.DateTimeFormat("en-GB", timeOptions).format(now));
      setDate(new Intl.DateTimeFormat("en-GB", dateOptions).format(now));
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Time Display with Gradient */}
      <h1 className="xl:text-6xl md:text-6xl text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF705B] to-[#FFB457]">
        {time}
      </h1>

      {/* Date Display */}
      <p className="text-sm text-gray-500 mt-1">{date}</p>
    </div>
  );
};

export default DateTimeComponent;
