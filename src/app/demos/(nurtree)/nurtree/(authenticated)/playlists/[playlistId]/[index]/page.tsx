import { getPlaylistById, getTrackById, getYoutubeVideoDamon } from "@/lib/actions";
import { getAuthSession } from "@/util/serverUtils";
import { Metadata } from "next";
import { Damon2Items, Track, YoutubeVideo } from "@/types/types";
import IndexContainer from "@/components/spotify/IndexContainer";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Vibrant } from "node-vibrant/browser";


interface Props {
  params: Promise<{
    playlistId: string;
    index: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = await getAuthSession();
  if (!session) {
    return {
      title: "Error in loading playlist data",
    };
  }
  const playlistId = (await params).playlistId;
  const playlist = await getPlaylistById(session, playlistId);
  return {
    title: `Spotify - ${playlist.name}`,
  };
}



export default async function PlaylistPage({ params }: Props) {
  
  const session = await getAuthSession();
  if (!session) {
    redirect("/login");
  }
 
  const param = (await params);
  
  //  const youtubeVideo: Damon2Items[] = [];

  
  //  for (let i = 0; i < playlistTracks.length; i++){
  //    const result = await getYoutubeVideoDamon(session, playlistTracks[0]);
  //    youtubeVideo.push(result);
  //  }
  //redirect(pathname +`/tracks/${playlistTracks[0]}`);
  
  const playlistId = param.playlistId;
  const index = Number(param.index);
  const playlist = await getPlaylistById(session, playlistId);
  //const track = await getTrackById(session, trackId);
  const playlistTracks:Track[] = playlist?.tracks.items
        .filter((item: any) => item.track !== null)
        .map((item: any) => item.track);

  
      
  if (index !== undefined) {
    //const track = await getTrackById(session, trackId);
    const result = await getYoutubeVideoDamon(session, playlistTracks[index]);
    
    return (
      <div className="scrollbar-hide">
      <IndexContainer
      playlist={playlist}
      tracks={playlist?.tracks.items
        .filter((item: any) => item.track !== null)
        .map((item: any) => item.track)}
      track={result.id}
      index={index}
      
      />
    </div>
    );
  } 
}
