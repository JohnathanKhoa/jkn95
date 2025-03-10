import {
  getUserLikedPlaylists,
  getUserLikedSongs,
} from "@/lib/actions";
import { getAuthSession } from "@/util/serverUtils";
import Image from "next/image";
import SidebarLinksList from "./SidebarLinksList";
import UserLibrary from "./UserLibrary";
import SpotifyImage from '@/public/images/spotify_logo.png'
import YoutubeImage from '@/public/images/yt_logo_mono_dark.png'



export default async function Sidebar() {
  const session = await getAuthSession();

  if (!session) {
    return null;
  }

  const [playlists, likedSongsCount] = await Promise.all([
    getUserLikedPlaylists(session),
    getUserLikedSongs(session).then((data) => data.total),
  ]);

  return (
    <aside className="sticky top-0 text-sm rounded-lg">
      <div className="md:flex hidden flex-col items-center p-4 rounded-lg bg-paper-700">
      <Image
          src={YoutubeImage}
          width={125}
          height={50}
          alt="Youtube logo"
          priority
        />
        <div className="py-2"></div>
        <Image
          src={SpotifyImage}
          width={125}
          height={50}
          alt="Spotify logo"
          priority
        />
        
  
      
      </div>
      <SidebarLinksList />
        <UserLibrary
        playlists={playlists}
        />
    </aside>
  );
}
