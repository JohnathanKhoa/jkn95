"use client";
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { Playlist } from "@/types/types";
import { Menu as MenuIcon } from "lucide-react";
import { Fragment } from "react";
import LibraryItemCard from "./LibraryItemCard";
import clsx from 'clsx';


interface Props {
  playlists: Playlist[];
  
  
}



export default function UserLibrary({
  playlists,
  
  
}: Props) {
  

  return (
    
    <div className="flex items-start w-full overflow-y-hidden rounded-lg bg-paper-700 ">
      <div className="flex flex-col items-center w-full">
        ---
      <Menu>
      <MenuButton as={Fragment}>
        {({ active }) => <button className={clsx(active)}>{active === true ? <MenuIcon size={25} /> : <MenuIcon size={25} className="animate-bounce"/>}</button>}
        
      </MenuButton>
      
      <MenuItems anchor="bottom" className="overflow-auto scrollbar-hide bg-zinc-700 rounded-xl opacity-80">
      {playlists.map((playlist) => (
              <LibraryItemCard
                key={playlist.id}
                entity={playlist}
                type="playlists"
                subtitle={playlist.owner.display_name}
              />
            ))}
      </MenuItems>
    </Menu>
    </div>
    </div>
  );
}
