import AlbumCards from "@/components/spotify/AlbumCards";
import ArtistCards from "@/components/spotify/ArtistCards";
import PlayTrackButton from "@/components/spotify/PlayTrackButton";
import TrackCards from "@/components/spotify/TrackCards";
import {
  getNewReleases,
  getRecentlyPlayedTracks,
  getTopItems,
  getYoutubeVideo,
  getYoutubeVideoDamon,
} from "@/lib/actions";
import { Artist, Damon2Items, Track, YoutubeVideo } from "@/types/types";
import { getGreeting } from "@/util/clientUtils";
import { getAuthSession } from "@/util/serverUtils";
import { Album } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import SpotifyImage from '@/public/images/spotify_logo.png'
import PlayVideoButton from "@/components/spotify/PlayVideoButton";


export const metadata = {
  title: "Welcome to Spotify",
};

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  const topTracks = (await getTopItems({
    session,
    limit: 9,
    type: "tracks",
  }).then((data) => data.items)) as Track[];


{/*
  const youtubeVideos: any[] = [];

  await Promise.all(
    topTracks.map(async (track) => {
      const result = await getYoutubeVideo(session, track);
      youtubeVideos.push(result);
    })
  )
*/}



  

  return (

    <section className="flex flex-col items-start">
      <h1 className="mb-5 text-3xl font-bold">Good {getGreeting()}</h1>

      <h1 className="mt-8">Top Tracks</h1>
      <div className="grid w-full grid-cols-12 gap-4">
        {topTracks.map((track) => (
          <Link
            href={`nurtree/tracks/${track.id}`}
            key={track.id}
            className="flex items-center justify-between col-span-4 pr-4 truncate rounded-md group/item bg-paper-600 hover:bg-paper-400"
          >
            <div className="flex items-center gap-4">
              {track.album.images.length > 0 ? (
                <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  width={96}
                  height={96}
                  className="object-cover h-full rounded-tl-md rounded"
                />
              ) : (
                <Album size={20} />
              )}
              <h3 className="font-semibold truncate">{track.name}</h3>
            </div>

            <PlayTrackButton
              track={track}
              variant="filled"
              className="invisible w-12 h-12 text-3xl group/btn group-hover/item:visible"
            />
          </Link>
        ))}
      </div>

      
      
    </section>
  );
}
