import React from "react";
import ArtistCard from "@/components/ArtistCard";

const ArtistsPage = async () => {
  const data = await fetch("https://qevent-backend.labs.crio.do/artists");
  const artists = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[calc(100vh-3.75rem)] mt-5 w-full p-4">
      {artists.map((artistData) => (
        <ArtistCard artistData={artistData} />
      ))}
    </div>
  );
};

export default ArtistsPage;
