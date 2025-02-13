import React, { useState, useEffect } from "react";

const TimeCounter: React.FC = () => {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalMonths: 0,
    totalWeeks: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(2018, 8, 1); // 01/09/2018 (JavaScript uses 0-based months)

    const updateCounter = () => {
      const now = new Date();

      /// 🌟 Calculate differences
      const timeDiff = now.getTime() - startDate.getTime(); // Difference in milliseconds

      // 🔹 Total seconds and minutes
      const totalSeconds = Math.floor(timeDiff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = Math.floor(totalDays / 7);
      const totalMonths = Math.floor(totalDays / 30.44); // Approximate month length

      // 🔹 Years & Months & Days
      const yearsDiff = now.getFullYear() - startDate.getFullYear();
      const monthsDiff = now.getMonth() - startDate.getMonth();
      const daysDiff = now.getDate() - startDate.getDate();

      let adjustedYears = yearsDiff;
      let adjustedMonths = monthsDiff < 0 ? monthsDiff + 12 : monthsDiff;
      let adjustedDays = daysDiff;

      if (monthsDiff < 0) adjustedYears -= 1;
      if (daysDiff < 0) {
        const prevMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();

        adjustedDays += prevMonthDays;
        adjustedMonths -= 1;
      }

      // 🔹 Update State
      setTimeData({
        years: adjustedYears,
        months: adjustedMonths,
        days: adjustedDays,
        totalMonths,
        totalWeeks,
        totalDays,
        totalHours,
        totalMinutes,
        totalSeconds,
      });
    };

    // ✅ Update every second
    const interval = setInterval(updateCounter, 1000);

    updateCounter(); // Run once initially

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className=" text-center ">
        <p>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <h1 className="text-4xl font-bold ">
              {timeData.totalSeconds.toLocaleString()}
            </h1>
            <p className="text-muted font-bold ">&nbsp;seconds</p>
          </div>
          <p className="text-sm  mt-1">{`${timeData.totalMinutes.toLocaleString()} minutes | ${timeData.totalHours.toLocaleString()} hours`}</p>
        </p>
      </div>
    </>
  );
};

export default TimeCounter;
