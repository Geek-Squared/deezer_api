import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useSearchArtist } from "../customHooks/useSearchArtist";
import useGetArtistTrackQuery from "../pages/api/useGetArtistTrack";
import Link from "next/link";
import { useSelectedArtistDetails } from "../customHooks/useSelectedArtist";
import { Artist } from "../types";
import { convertToHour } from "./utils";
/**
 *
 * @returns Track Details
 */
const TrackCard = () => {
  const { selectedArtist } = useSearchArtist();
  const { setSelectedCard } = useSelectedArtistDetails();
  const { data } = useGetArtistTrackQuery(selectedArtist);
  const artists = data?.data;

  if (!artists) {
    <img
      src={"https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png"}
      alt="Loading Data..."
    />;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 1 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ marginTop: "40px", width: "80%", margin: "auto" }}
    >
      {artists?.map((artist: Artist) => (
        <Grid item xs={12} sm={4} md={4} key={artist?.id}>
          <Link href={`/${artist?.id}`}>
            <div>
              <Card
                sx={{ width: "100%", cursor: "pointer" }}
                key={artist?.id}
                onClick={() => {
                  setSelectedCard(artist);
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={artist?.album?.cover_medium}
                  alt="Image"
                />
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      style={{
                        width: "200px",
                        overflow: "hidden",
                        height: "1.4em",
                        lineHeight: "1.4em",
                      }}
                    >
                      {artist?.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {convertToHour(artist?.duration)}
                    </Typography>
                  </div>
                  <Typography variant="caption" color="text.secondary">
                    {artist?.artist?.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {artist?.album?.title}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrackCard;
