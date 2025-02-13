import {
  Card,
  CardBody,
  Button,
  Image,
  Progress,
  CardProps,
} from "@heroui/react";
import { useState, useRef, useEffect, FC } from "react";
import { clsx } from "@heroui/shared-utils";
import ReactPlayer from "react-player";
import confetti from "canvas-confetti";
import {
  IoHeartOutline,
  IoHeart,
  IoPlayBack,
  IoPlayForward,
  IoPlay,
  IoPause,
} from "react-icons/io5";

export interface StreamMusicPlayerProps extends CardProps {}

export const StreamMusicPlayer: FC<StreamMusicPlayerProps> = ({
  className,
  ...otherProps
}) => {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef<ReactPlayer | null>(null);
  let animationEnd = Date.now();

  const track = {
    title: "blue",
    artist: "yung kai",
    url: "https://www.youtube.com/watch?v=98zHKN-xSHk", // YouTube/MP3 Link
    thumbnail:
      "https://images.unsplash.com/photo-1589010114867-8e9c48fa772a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  useEffect(() => {
    let animationFrameId: number;

    function runConfetti() {
      if (!isPlaying) return; // Only run while playing music

      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      let skew = Math.max(0.8, 1 - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ["#F0C1E1", "#FDDBBB", "#FFF9BF"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(runConfetti);
      }
    }

    if (isPlaying) {
      animationEnd = Date.now() + duration;
      animationFrameId = requestAnimationFrame(runConfetti);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <Card
      isBlurred
      className={clsx(
        "border-none bg-background/60 rounded-3xl dark:bg-default-100/50 w-full",
        className
      )}
      shadow="sm"
      {...otherProps}
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="lg"
              src={track.thumbnail}
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8 h-full">
            <div className="flex justify-end items-start">
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? (
                  <IoHeart style={{ fontSize: 24 }} />
                ) : (
                  <IoHeartOutline style={{ fontSize: 24 }} />
                )}
              </Button>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="text-sm font-semibold text-foreground/90">
                  {track.artist}
                </h3>
                <h1 className="text-lg font-medium mt-2">{track.title}</h1>
              </div>
            </div>
            <div className="flex flex-col mt-3 gap-1">
              {/* Progress Bar */}
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={(playedSeconds / duration) * 100}
              />
              <div className="flex justify-between">
                <p className="text-sm">
                  {new Date(playedSeconds * 1000).toISOString().substr(14, 5)}
                </p>
                <p className="text-sm text-foreground/50">
                  {new Date(duration * 1000).toISOString().substr(14, 5)}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <IoPlayBack style={{ fontSize: 24 }} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                size="lg"
                variant="light"
                onClick={() => setIsPlaying((prev) => !prev)}
              >
                {isPlaying ? (
                  <IoPause style={{ fontSize: 32 }} />
                ) : (
                  <IoPlay style={{ fontSize: 32 }} />
                )}
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <IoPlayForward style={{ fontSize: 24 }} />
              </Button>
            </div>
          </div>
        </div>
        {/* Hidden Music Player */}
        <ReactPlayer
          ref={playerRef}
          controls={false}
          height="0"
          playing={isPlaying}
          url={track.url}
          width="0"
          onDuration={(duration) => setDuration(duration)}
          onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
        />
      </CardBody>
    </Card>
  );
};
