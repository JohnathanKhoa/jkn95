import styles from "@/styles/Description.module.css";
import TracksTable from "@/components/spotify/TracksTable";
import { getPlaylistById, getUserPlaylist, getYoutubeVideo, getYoutubeVideoDamon } from "@/lib/actions";
import { getAuthSession } from "@/util/serverUtils";
import parse from "html-react-parser";
import { Dot, Music } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Damon2Items, Track, YoutubeVideo } from "@/types/types";
import Video from "@/components/spotify/Video";
import IndexContainer from "@/components/spotify/IndexContainer";


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

export function setCurrentVideo({id}: YoutubeVideo) {
    return (
      <div className="width: 100%; min-width: 400px; max-width: 800px;">
        <div className="position: relative; width: 100%; overflow: hidden; padding-top: 56.25%;">
          <p><iframe className="position: absolute; top: 0; left: 0; right: 0; width: 100%; height: 100%; border: none;" src={`https://www.youtube.com/embed/${id}`} width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></p>
        </div>
      </div>
    )
}


export default async function PlaylistPage({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    redirect("/login");
  }
 
  const playlistId = await params.playlistId;
  const playlist = await getPlaylistById(session, playlistId);
  //const playlist = await getUserPlaylist(session);
  const playlistTracks:Track[] = playlist?.tracks.items
  .filter((item: any) => item.track !== null)
  .map((item: any) => item.track);
  
  const youtubeVideo: Damon2Items[] = [];
  

  const resolvePromisesSeq = async (tasks) => {
    const results = [];
    for (const task of tasks) {
      results.push(await task);
    }
  
    return results;
  };

  for (let i = 0; i < playlistTracks.length; i++){
    const result = await getYoutubeVideoDamon(session, playlistTracks[i]);
    youtubeVideo.push(result);
  }
  
  {/*
    playlistTracks.map(async (track) => {
      
      await getYoutubeVideoDamon(session, track).then(async (res) => {
        const result = await res;
        youtubeVideo.push(await result);
      });
      
      
    })
  */}
  console.log(youtubeVideo);

  {/*  //Youtube API Quota caps at 100 songs, cannot get all videos without exceeding quota
  playlist.tracks.items?.forEach(async (track) => {
    await getYoutubeVideo(session, track.track).then((res) =>{
      youtubePlaylist.push(res.url);
    }
    );
    console.log(youtubePlaylist);
  });
  */}

  
  

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
