import Sidebar from "./assets/Sidebar.tsx"
import Toolbar from "./assets/Toolbar.tsx"
import Slideview from "./assets/Slideview.tsx"
import { Card, CardBody } from "react-bootstrap"


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
