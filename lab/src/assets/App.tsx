import Sidebar from "./Sidebar"
import Toolbar from "./Toolbar"
import Slideview from "./Slideview"

 export default function App() {
  return (
  <div className="d-flex flex-column vh-100">
 
  <Toolbar/>
  <div className="d-flex flex-grow-1">
    <Sidebar/>
    <Slideview/> 
</div>
</div>
  )
}
