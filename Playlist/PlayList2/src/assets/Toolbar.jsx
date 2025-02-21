import ToolbarButton from "./ToolbarButton";


export default function Toolbar() {
    return (
    <div className="bg-light p-5 border-bottom">  
        <ToolbarButton onclick={() => alert("Set Font Color!")}/>
        <ToolbarButton onClick={() => alert("Set font family!")}/> 
    </div>
    )
    }
