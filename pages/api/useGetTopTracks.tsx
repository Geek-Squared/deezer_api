import { useQuery } from "@tanstack/react-query";

const useGetTopTracksQuery = (artistId: string) => {
  const getArtist = async () => {
    const res = await fetch(
      `https://api.deezer.com/artist/${artistId}/top`
    );
    const data = await res.json();
    return data;
  };

  return useQuery(["topTrack", artistId], getArtist);
};

export default useGetTopTracksQuery;
