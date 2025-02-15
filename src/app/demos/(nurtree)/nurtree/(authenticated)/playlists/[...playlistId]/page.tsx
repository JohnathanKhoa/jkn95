import { getPlaylistById, getYoutubeVideoDamon } from "@/lib/actions";
import { getAuthSession } from "@/util/serverUtils";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Damon2Items, Track, YoutubeVideo } from "@/types/types";
import IndexContainer from "@/components/spotify/IndexContainer";
import { Suspense } from "react";


interface Props {
  params: {
    playlistId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = await getAuthSession();
  if (!session) {
    return {
      title: "Error in loading playlist data",
    };
  }
  const playlistId = params.playlistId;
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
 
  const playlistId = await params.playlistId;
  const playlist = await getPlaylistById(session, playlistId);
  const playlistTracks:Track[] = playlist?.tracks.items
  .filter((item: any) => item.track !== null)
  .map((item: any) => item.track);
  
  const youtubeVideo: Damon2Items[] = [];


  for (let i = 0; i < playlistTracks.length; i++){
    const result = await getYoutubeVideoDamon(session, playlistTracks[i]);
    youtubeVideo.push(result);
  }

  return (
    <>
        
        <div className="scrollbar-hide">
        <IndexContainer
        playlist={playlist}
        tracks={playlist?.tracks.items
          .filter((item: any) => item.track !== null)
          .map((item: any) => item.track)}
        showAlbum
        showCover
        showHeader
        showSubtitle
        youtubeVideos={youtubeVideo}/>
        
      </div>
      
    </>
  );
}
