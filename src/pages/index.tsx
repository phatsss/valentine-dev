import { Card } from "@heroui/react";
import { useEffect, useState } from "react";

import loveWordArray from "../assets/love_worldwide.json";

import DefaultLayout from "@/layouts/default";
// import { MusicPlayer } from "@/components/MusicPlayer";
import FlagSlide from "@/components/FlagSlide";
import TextSlide from "@/components/TextSlide";
import DateTimeComponent from "@/components/DateTimeComponent";
import ValentineConfettiButton from "@/components/ValentineConfettiButton";
import TimeCounter from "@/components/TimeCounter";
import TotalTimeCounter from "@/components/TotalTimeCounter";
import FromDate from "@/components/FromDate";
import { StreamMusicPlayer } from "@/components/StreamMusicPlayer";

export default function IndexPage() {
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
          <Card className="bg-gradient-to-r from-orange-300 to-rose-300 p-6 rounded-3xl flex flex-col justify-center items-center">
            <FromDate />
          </Card>
          {/* Card 2 */}
          <Card className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 rounded-3xl flex flex-col justify-center items-center">
            <TotalTimeCounter />
          </Card>

          {/* Card 3 */}
          <Card className="bg-gradient-to-r from-sky-300 to-orange-200 p-6 rounded-3xl flex flex-col justify-center items-center">
            <DateTimeComponent />
          </Card>

          {/* Card 4 (Main Image) */}
          <Card className="bg-gradient-to-r from-rose-400 to-red-500 sm:col-span-2 md:col-span-2 row-span-2 rounded-3xl flex justify-center items-center p-6">
            <StreamMusicPlayer />
          </Card>

          {/* Card 5 */}
          <Card className="bg-gradient-to-r from-red-400 to-pink-500 p-6 rounded-3xl flex flex-col justify-center items-center">
            {/* <h3 className="text-xl font-bold">CUBO</h3> */}
            <TimeCounter />
          </Card>

          {/* Card 6 */}
          <Card className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-3xl flex flex-col justify-center">
            <ValentineConfettiButton />
          </Card>

          {/* Card 7 */}
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-3xl flex flex-col justify-center">
            <FlagSlide loveWord={loveWordArray} wordIndex={wordIndex} />
          </Card>

          {/* Card 8 */}
          <Card className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 rounded-3xl sm:col-span-2 flex justify-between items-center">
            <TextSlide loveWord={loveWordArray} wordIndex={wordIndex} />
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
