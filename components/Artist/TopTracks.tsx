import { Typography, Grid, Divider } from "@mui/material";
import React from "react";
import { useSelectedArtistDetails } from "../../customHooks/useSelectedArtist";
import useGetTopTracksQuery from "../../pages/api/useGetTopTracks";
import { convertToHour } from "../utils";

const TopTracks = () => {
  const { selectedCard } = useSelectedArtistDetails();
  const { data } = useGetTopTracksQuery(selectedCard?.artist.id);

  return (
    <div
      style={{
        marginTop: "40px",
        marginLeft: "20px",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "7px" }}>
        Top Tracks
      </Typography>
      {data?.data?.map((item: { title: string; duration: number }) => (
        <>
          <Grid
            container
            spacing={3}
            columns={3}
            sx={{
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            <Grid item>
              <Typography variant="body2">
                {data?.data?.indexOf(item) + 1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="#808080">
                {item?.title}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: "auto",
              }}
            >
              <Typography variant="caption" color="#808080">
                {convertToHour(item?.duration)}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default TopTracks;
