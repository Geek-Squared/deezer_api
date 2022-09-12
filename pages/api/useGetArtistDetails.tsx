import { useQuery } from "@tanstack/react-query";

const useGetArtistDetailsQuery = (artistId: string) => {
  const getArtistDetails = async () => {
    const res = await fetch(`https://api.deezer.com/album/${artistId}`);
    const data = await res.json();
    return data;
  };

  return useQuery(["artistId", artistId], getArtistDetails);
};

export default useGetArtistDetailsQuery;
