import { useQuery } from "@tanstack/react-query";

const useGetArtistTrackQuery = (trackName: string) => {
  const getArtist = async () => {
    const res = await fetch(
      `https://api.deezer.com/search?q=track:${trackName}`
    );
    const data = await res.json();
    return data;
  };

  return useQuery(["trackName", trackName], getArtist);
};

export default useGetArtistTrackQuery;
