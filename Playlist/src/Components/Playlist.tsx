import { Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

// export default function Playlist({ Playlist })
// {
//   return (
//     <div>


//   </div>
 
//   );
// }

export default function Playlist ({ playlist }) {

  return (
    <div>   
      <p> {Playlist.songTitle}</p>
      <p> {Playlist.album}</p>
      <p> {Playlist.band}</p>
    </div>
  )
}


// const Playlist: PL = () => {

//     const addSong = () => {
//         if (!newSong) {
//           setShowAlert(true);
//           return;
//         }
//         const Song: SongType = {
//           id: Song.length + 1,
//           title: newSong,
//           completed: false,
//         };
//         setSongs([...songs, song]);
//         setNewSong("");
//       };
    