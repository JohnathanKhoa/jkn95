import PlaylistCards from "@/components/spotify/PlaylistCards";
import { getCategoryById, getPlaylistsByCategory } from "@/lib/actions";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";

interface Props {
  params: {
    categoryId: string;
  };
}

export default async function CategoryPlaylistsPage({ params }: Props) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  const categoryId = params.categoryId;
  

  const category = await getCategoryById(session, categoryId);
  console.log(category)
  const playlists = await getPlaylistsByCategory(session, categoryId);

  return (
    <>
      <h1>{category.name}</h1>
      <PlaylistCards playlists={playlists} />
    </>
  );
}
