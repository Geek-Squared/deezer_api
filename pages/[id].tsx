import React from "react";
import ArtistView from "../components/Artist/ArtistView";
import { useSelectedArtistDetails } from "../customHooks/useSelectedArtist";

const artist = () => {
  const { selectedCard } = useSelectedArtistDetails();
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <ArtistView artistData={selectedCard} />
    </div>
  );
};

export default artist;
