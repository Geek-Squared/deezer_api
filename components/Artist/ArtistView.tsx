import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AlbumCard from "./AlbumCard";
import TopTracks from "./TopTracks";

interface IPropsArtistView {
  artistData?: any;
}

const ArtistView: FC<IPropsArtistView> = ({ artistData }) => {
  const theme = useMediaQuery("(max-width: 600px)");
  return (
    <div style={{ marginTop: "30px", width: "95%", margin: "auto" }}>
      <Card>
        <div
          style={{
            display: "flex",

            flexDirection: theme ? "column" : "row",
          }}
        >
          <CardContent
            style={{
              width: "70%",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <CardMedia
                height={400}
                width={400}
                component="img"
                image={artistData?.artist?.picture_big}
                alt="artist"
                style={{
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 8,
                  left: "30%",
                  marginTop: "70px",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="h3">{artistData?.artist?.name}</Typography>
                <Typography variant="caption">Fans</Typography>
              </div>
            </div>
          </CardContent>
          <TopTracks />
        </div>
      </Card>

      <AlbumCard />
    </div>
  );
};

export default ArtistView;
