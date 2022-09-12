
/**
 * This context is used to share the selected artist between the search page and the artist page
 */
import React, { useContext, createContext, useState, FC } from "react";

interface IArtist {
  selectedArtist: any;
  setSelectedArtist: any;
}

const defaultContext: IArtist = {
  selectedArtist: "",
  setSelectedArtist: () => {},
};

interface IPropsChildren {
  children: React.ReactNode;
}

const ArtistContext = createContext(defaultContext);

const useArtistData = () => {
  const [selectedArtist, setSelectedArtist] = useState("");

  const handleSelectedArtist = (name: string) => {
    setSelectedArtist(name);
  };

  return {
    selectedArtist,
    setSelectedArtist: handleSelectedArtist,
  };
};

export const useSearchArtist = () => useContext(ArtistContext);

export const ArtistDataProvider: FC<IPropsChildren> = ({ children }) => {
  return (
    <ArtistContext.Provider value={useArtistData()}>
      {children}
    </ArtistContext.Provider>
  );
};
