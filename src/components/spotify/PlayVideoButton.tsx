"use client";

import { useStore, useStoreV } from "@/providers/zustand";
import { Track, YoutubeVideo } from "@/types/types";
import { MdPlayArrow } from "react-icons/md";

interface Props {
  variant?: "simple" | "filled";
  youtubeVideo: YoutubeVideo;
  className?: string;
}

export default function PlayTrackButton({
  variant = "simple",
  youtubeVideo,
  className,
}: Props) {
  const { setCurrentVideo } = useStoreV();

  const simpleButtonStyle = "flex items-center col-span-1 text-white";
  const filledButtonStyle =
    "flex items-center justify-center rounded-full bg-primary";

  return (
    <button
      className={`${
        variant === "filled" ? filledButtonStyle : simpleButtonStyle
      } ${className} ${!youtubeVideo.url && "cursor-not-allowed"}`}
      onClick={(e) => {
        e.preventDefault();
        if (youtubeVideo.url) {
          setCurrentVideo(youtubeVideo);
        }
      }}
      disabled={youtubeVideo.url === null}
    >
      <MdPlayArrow
        className={
          variant === "filled"
            ? "text-paper-700"
            : "flex items-center text-white"
        }
      />
    </button>
  );
}
