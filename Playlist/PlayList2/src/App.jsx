import Button from 'react-bootstrap/Button';
// import Songs from "./components/Songs"; 
import { defaultSongs } from './assets/data';
import SongsList from './components/SongsList';
// import Sidebar from './Sidebar';  these may or may not be needed later. 
// import { Toolbar } from "./assets/Toolbar";
// import ToolbarButton from './assets/ToolbarButton';

// function App runs data through function to list SongList and exports as App
function App() {

  return ( 
    
    <div> 
    {/* <Button variant="warning">Click Me!</Button>  */}
    {/* <Toolbar/>
    <ToolbarButton/> */}
    {/* <Sidebar /> */}
    <Button />
    <h1>Songs Playlist</h1>   

      <SongsList songs={defaultSongs} />
      {/* <Songs song={defaultSongs} /> */}
      
   </div>    
    );
}

export default App
