import type { NextPage } from "next";
import TrackCard from "../components/TrackCard";
import TopBar from "../components/TopBar";

const Home: NextPage = () => {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <TopBar />
      <TrackCard />
    </div>
  );
};

export default Home;
