import React from "react";

const FromDate: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Time Display with Gradient */}
        <h1 className="xl:text-6xl md:text-4xl text-6xl font-bold bg-gradient-to-br from-pink-500 to-orange-500 bg-clip-text text-transparent">
          01.09.2018
        </h1>
      </div>
    </>
  );
};

export default FromDate;
