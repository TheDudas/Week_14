import Sidebar from "./assets/Sidebar"
import Toolbar from "./assets/Toolbar"
import Slideview from "./assets/Slideview.tsx"



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
