import { Card } from "@heroui/react";
import { useEffect, useState } from "react";

import loveWordArray from "../assets/love_worldwide.json";

import DefaultLayout from "@/layouts/default";
import { MusicPlayer } from "@/components/MusicPlayer";
import FlagSlide from "@/components/FlagSlide";
import TextSlide from "@/components/TextSlide";
import DateTimeComponent from "@/components/DateTimeComponent";
import ValentineConfettiButton from "@/components/ValentineConfettiButton";
import FromDate from "@/components/FromDate";
import TotalTimeCounter from "@/components/TotalTimeCounter";
import TimeCounter from "@/components/TimeCounter";

export default function DevTest() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loveWordArray.length);

      setWordIndex(randomIndex);
    }, 5000); // Cycle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex justify-center p-4 bg-black min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[1200px] p-6">
          {/* Card 1 */}
          <Card className="bg-[#F0A8D0] p-6 rounded-3xl flex flex-col justify-center items-center">
            {/* <p className="text-lg md:text-xl font-semibold text-center">
              First Round of Funding
            </p>
            <div className="w-20 h-20 flex justify-center items-center border-4 border-red-500 rounded-full mt-4">
              <span className="text-xl font-bold">75%</span>
            </div>
            <p className="text-sm mt-2 text-center">2.5K Contributions</p> */}
            <FromDate />
          </Card>
          {/* Card 2 */}
          <Card className="bg-[#FFE9D0] p-6 rounded-3xl flex flex-col justify-center items-center">
            {/* <p className="text-3xl font-bold">4,875</p>
            <p className="text-sm text-gray-500 text-center">Project Views</p> */}
            <TotalTimeCounter />
          </Card>

          {/* Card 3 */}
          <Card className="bg-[#FFF9BF] p-6 rounded-3xl flex flex-col justify-center items-center">
            <DateTimeComponent />
          </Card>

          {/* Card 4 (Main Image) */}
          <Card className="bg-[#CB9DF0] sm:col-span-2 md:col-span-2 row-span-2 rounded-3xl flex justify-center items-center p-6">
            {/* <img
              alt="Person"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full"
              src="https://via.placeholder.com/300"
            /> */}
            <MusicPlayer />
          </Card>

          {/* Card 5 */}
          <Card className="bg-[#FDDBBB] p-6 rounded-3xl flex flex-col justify-center items-center">
            {/* <h3 className="text-xl font-bold">CUBO</h3> */}
            <TimeCounter />
          </Card>

          {/* Card 6 */}
          <Card className="bg-[#F0C1E1] p-6 rounded-3xl flex flex-col justify-center">
            {/* <p className="text-lg font-semibold text-center">
              Smart Digital Agency
            </p>
            <p className="text-xs text-gray-500 text-center">
              For Your Business
            </p> */}
            <ValentineConfettiButton />
          </Card>

          {/* Card 7 */}
          <Card className="bg-[#A594F9] p-6 rounded-3xl flex flex-col justify-center">
            <FlagSlide loveWord={loveWordArray} wordIndex={wordIndex} />
          </Card>

          {/* Card 8 */}
          <Card className="bg-[#F0A8D0] p-6 rounded-3xl sm:col-span-2 flex justify-between items-center">
            <TextSlide loveWord={loveWordArray} wordIndex={wordIndex} />
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
