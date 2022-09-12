/**
 * This context is used to share the selected artist across the entire app
 */
import React, { useContext, createContext, useState, FC } from "react";

interface IPropsArtistCard {
  selectedCard: any;
  setSelectedCard: any;
}

const defaultContext: IPropsArtistCard = {
  selectedCard: "",
  setSelectedCard: () => {},
};

interface IPropsChildren {
  children: React.ReactNode;
}

const ArtistDetailsContext = createContext(defaultContext);

const useArtistCardDetails = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleSelectedCard = (artist: any) => {
    setSelectedCard(artist);
  };

  return {
    selectedCard,
    setSelectedCard: handleSelectedCard,
  };
};

export const useSelectedArtistDetails = () => useContext(ArtistDetailsContext);

export const ArtistCardProvider: FC<IPropsChildren> = ({ children }) => {
  return (
    <ArtistDetailsContext.Provider value={useArtistCardDetails()}>
      {children}
    </ArtistDetailsContext.Provider>
  );
};
