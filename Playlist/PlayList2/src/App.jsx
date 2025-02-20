// import Button from 'react-bootstrap/Button';
// import Songs from "./components/Songs"; 
import { defaultSongs } from './assets/data';
import SongsList from './components/SongsList';

function App() {

  return ( 
    <div> 
    {/* <Button variant="warning">Click Me!</Button>  */}
    <h1>Songs Playlist</h1>   

      <SongsList songs={defaultSongs} />
      {/* <Songs song={defaultSongs} /> */}
      
   </div>    
    );
}

export default App
