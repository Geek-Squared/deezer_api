import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArtistDataProvider } from "../customHooks/useSearchArtist";
import { ArtistCardProvider } from "../customHooks/useSelectedArtist";

//create a query client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArtistDataProvider>
      <ArtistCardProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ArtistCardProvider>
    </ArtistDataProvider>
  );
}

export default MyApp;
