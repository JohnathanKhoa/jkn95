'use client'
import { Track, Playlist } from "@/types/types";
import { useState } from "react";
import TracksTable from "./TracksTable";
import Video from "./Video";
import Image from "next/image";
import { Music, Dot } from "lucide-react";
import parse from "html-react-parser";
import styles from "@/styles/Description.module.css";
import { Vibrant } from "node-vibrant/browser";

interface Props {
  tracks: Track[];
  track: string;
  playlist: Playlist
  index: number;
}


export default function IndexContainer({
    playlist,
    tracks,
    track,
    index,
      }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    let v = new Vibrant(playlist.images[0].url);
    // async function color(image) {
    //     let v = new Vibrant(image);
        
    //     v.getPalette().then((palette) => {return palette.Vibrant?.hex});
        
    //   }
    
    // color(playlist.images[0].url);
    
    
    return (
        <>
        <div className="flex flex-col">
            <div className="relative h-1/3 aspect-video top-1/5">
                {<Video tracksLength={tracks.length} id={track} index={index} currentIndex={setCurrentIndex}/>}
            
            </div>
            <div className="md:flex hidden items-end gap-6 my-4">
        {playlist && (
          <>
            {playlist.images.length > 0 ? (
              <Image
                src={playlist.images[0].url}
                alt={playlist.name}
                height={240}
                width={240}
                className="md:visible ring-2-white-500 shadow-2xl invisible object-contain rounded-3xl md:w-40 w-0 md:h-40 h-0"
                priority
              />
            ) : (
              <div className="w-full h-40">
                <Music size={160} className="w-full h-full bg-paper " />
              </div>
            )}

            <div className="md:visible invisible flex flex-col gap-3">
              <h5 className="text-xs font-bold uppercase shadow-2xl">{playlist.type}</h5>
              <h2 className="text-4xl font-bold">{playlist.name}</h2>

              {playlist.description && (
                <p className={styles.description + " font-medium mt-3"}>
                  {parse(playlist.description)}
                </p>
              )}

              <div className="flex items-center text-sm font-semibold">
                <span>{playlist.owner?.display_name}</span>
                {playlist.followers.total > 0 && (
                  <>
                    <Dot />
                    <span>
                      {playlist.followers.total.toLocaleString()}{" "}
                      {playlist.followers.total > 1 ? "likes" : "like"}
                    </span>
                  </>
                )}
                {playlist.tracks.items.length > 0 && (
                  <>
                    <Dot />
                    <span>{playlist.tracks.total.toLocaleString()} songs</span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
        <div className="relative w-full overflow-auto scrollbar-hide">
            <TracksTable
                tracks={tracks}
                showAlbum
                showCover
                showHeader
                showSubtitle
                i={index}
                
                currentIndex={setCurrentIndex}
                trackIndex={currentIndex}
            />
    </div>
    </div>
    </>
    )
}