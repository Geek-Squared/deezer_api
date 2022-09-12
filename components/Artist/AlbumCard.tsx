import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelectedArtistDetails } from "../../customHooks/useSelectedArtist";
import useGetArtistDetailsQuery from "../../pages/api/useGetArtistDetails";

type Artist = {
  id: number;
  title: string;
  album: {
    cover_big: string;
    cover_medium: string;
    title: string;
  };
  duration: number;
  artist: {
    name: string;
  };
};

const AlbumCard = () => {
  const { selectedCard } = useSelectedArtistDetails();
  const { data } = useGetArtistDetailsQuery(selectedCard?.artist.id);

  if (!data) {
    <Typography variant="h6" sx={{ marginBottom: "7px" }}>
      No Albums
    </Typography>;
  }

  return (
    <div
      style={{
        marginTop: "50px",
        width: "50%",
        margin: "auto",
      }}
    >
      <Typography variant="body1" color="text.primary">
        Albums
      </Typography>
      <Grid container spacing={{ xs: 2, md: 1 }}>
        {data?.tracks?.data?.slice(0, 4).map((item: Artist) => (
          <Grid item xs={12} sm={12} md={3} key={item?.id}>
            <Card sx={{ marginTop: "10px" }}>
              <CardMedia
                component="img"
                height="194"
                image={item?.album?.cover_big}
                alt="Image"
              />
              <CardContent>
                <div>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    style={{
                      width: "200px",
                      overflow: "hidden",
                      height: "1.4em",
                      lineHeight: "1.4em",
                    }}
                  >
                    {item?.album?.title}
                  </Typography>
                  <Typography variant="caption" color="#808080">
                    2018
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AlbumCard;
