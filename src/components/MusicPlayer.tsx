import {
  Card,
  CardBody,
  Button,
  Image,
  Progress,
  CardProps,
} from "@heroui/react";
import { useState, FC } from "react";
import { clsx } from "@heroui/shared-utils";
import {
  IoHeartOutline,
  IoHeart,
  IoPlayBack,
  IoPlayForward,
  IoPlay,
  IoPause,
} from "react-icons/io5";

export interface MusicPlayerProps extends CardProps {}

export const MusicPlayer: FC<MusicPlayerProps> = ({
  className,
  ...otherProps
}) => {
  const [liked, setLiked] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <Card
      isBlurred
      className={clsx(
        "border-none bg-background/60 rounded-3xl dark:bg-default-100/50",
        className
      )}
      shadow="sm"
      {...otherProps}
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              isBlurred
              alt="Album cover"
              className="object-cover"
              //   classNames={{
              //     base: "shadow-black/20",
              //   }}
              height={200}
              shadow="lg"
              src="https://heroui.com/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 h-full">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="text-sm font-semibold text-foreground/90">
                  Daily Mix
                </h3>
                <p className="text-sm text-foreground/80">12 Tracks</p>
                <h1 className="text-lg font-medium mt-2">Frontend Radio</h1>
              </div>
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

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-sm">1:23</p>
                <p className="text-sm text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-2">
              {/* <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneBoldIcon className="text-foreground/80" />
              </Button> */}
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
                onPress={() => setIsPlay((v) => !v)}
              >
                {/* <PauseCircleBoldIcon size={54} /> */}
                {isPlay ? (
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
                {/* <NextBoldIcon /> */}
              </Button>
              {/* <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleBoldIcon className="text-foreground/80" />
              </Button> */}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
