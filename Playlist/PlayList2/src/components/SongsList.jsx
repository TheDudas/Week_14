/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types
import Song from "./Songs";
// Exports the SongsList as songs and displays for App

// eslint-disable-next-line react/prop-types
export default function SongsList({ songs }) {
    console.log(songs);

  return (
<div className="border border-width-4px bg-light p-4 d-flex flex-column">
    {songs?.map((song) => (
      <Song key={song.id} song={song}/>)
    )}
  
    </div>
  );
}
