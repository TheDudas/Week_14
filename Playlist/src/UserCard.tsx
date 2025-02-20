import { Button, Card } from "react-bootstrap";
import { FC } from "react";
import { DefaultSongs } from "./data";
// import defaultSongs  from "data file";
import Playlist from "./Components/Playlist";
import App from "./App";

interface SongsCard {
    id: number;
    songTitle: string; 
    album: string; 
    band: string; 
 }


const SongsCard: FC<Playlist> = ({ id, songTitle, album, band }) =>   
  {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title> Play List </Card.Title> 
        <Card.Subtitle className="mb-2 text-muted">Favorites</Card.Subtitle>
      
        <Card.Text>
          <strong>Title </strong>{`${DefaultSongs.songTitle}`}
          <br />
          <strong>Album</strong> {`${SongsCard.album}`}
          <br />
          <strong>Band</strong> {`${SongsCard.band}`}
          
        </Card.Text>
        <Button variant="primary">Enter Data</Button>
      </Card.Body>
    </Card>
  // );
//     }
//     interface SongCardProps {
//       song2: string; 
//       album2: string; 
//       bandName2: string; 
//     }
    
//     {  (
// <Card style={{ width: "18rem" }}>
// <Card.Body>
//   <Card.Title>{`${song2}`} </Card.Title>
//   <Card.Subtitle className="mb-2 text-muted">{song2}</Card.Subtitle>
//   <Card.Text>
//     <strong>Song</strong> {song2}
//     <br />
//     <strong>Album</strong> {album2}
//     <br />
//     <strong>Band</strong> {bandName2}
//   </Card.Text>
//   <Button variant="primary">Enter Song, album and BandName</Button>
// </Card.Body>
// </Card>

  );
};

export default SongsCard;
