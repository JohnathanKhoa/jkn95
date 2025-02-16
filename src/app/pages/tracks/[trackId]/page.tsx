import IndexContainer from "@/components/spotify/IndexContainer";
import { getPlaylistById, getTrackById, getYoutubeVideoDamon } from "@/lib/actions";
import { Track } from "@/types/types";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";

interface Props {
    params: Promise<{
      playlistId: string;
      trackId: string;
    }>;
  }

export default async function Page({params}: Props) {
    const session = await getAuthSession();
    if (!session) {
        redirect("/login");
    }

    
  
    

    
}