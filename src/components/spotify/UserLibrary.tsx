"use client";

import { Playlist } from "@/types/types";
import { EllipsisVerticalIcon, Layers, Menu } from "lucide-react";
import { useState } from "react";
import LibraryItemCard from "./LibraryItemCard";


interface Props {
  playlists: Playlist[];
  
  
}



export default function UserLibrary({
  playlists,
  
  
}: Props) {
  

  return (
    
    <div className="flex flex-col items-stretch flex-1 max-h-full px-2 py-4 mt-2 overflow-y-hidden rounded-lg bg-paper-700 ">
      <div className="md:flex hidden justify-center gap-3 my-1 text-gray">
        <Layers size={25} />
        <span className="md:flex hidden font-semibold justify-center">Your Library</span>
      </div>
      <div className="flex justify-center">---</div>
      <ul className="flex flex-col w-full overflow-y-auto text-sm scrollbar-hide">
            {playlists.map((playlist) => (
              <LibraryItemCard
                key={playlist.id}
                entity={playlist}
                type="playlists"
                subtitle={playlist.owner.display_name}
              />
            ))}
      </ul>
    </div>
  );
}
