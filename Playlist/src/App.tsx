import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css'

import { DefaultSongs } from './data';
// import MyNavbar from './Navbar'; 
// import Sidebar from './Sidebar';
import UserCard from './UserCard';
import Playlist from './Components/Playlist';
import SongsCard from './UserCard';

import Songlist from './Components/SongList';
// import { SongList } from './Components/SongList"; 


<h1>Playlist</h1>


function App() {
  const [count, setCount] = useState(0)
  console.log(UserCard);
  console.log(DefaultSongs);

  return (
    <>
      <div>
        <Playlist playlists={DefaultSongs}/>
        <Songlist/>
        {/* <Playlist/> */}
        <MyNavbar/>
        <Button>Hello</Button>
        <Sidebar/>
        {/* <DefaultSongs /> */}
        {/* <UserCard id={} songTitle={''} album={''} band={''}/> */}
        <SongsCard id={`${SongsCard.id}`} songTitle={`${SongsCard.songTitle}`} album={`${SongsCard.album}`} band={`${SongsCard.band}`}/>      
        {/* <Playlist Playlist={DefaultSongs[0]}/> */}

      
      </div>
     
  <div className="card"> 

  <button onClick={() => setCount((count) => count + 1)}>
    count is {count} </button>
</div>
    
    </>
  );
}

export default App
