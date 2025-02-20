/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types
import Song from "./Songs";

// eslint-disable-next-line react/prop-types
export default function SongsList({ songs }) {
    console.log(songs);

  return (
<div>
    {songs?.map((song) => (
      <Song key={song.id} song={song}/>)
    )}
  
    </div>
  );
}
