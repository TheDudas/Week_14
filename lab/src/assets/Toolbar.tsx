import ToolbarButton from "./ToolbarButton";
import colorIcon from  "./star-solid.svg"
import fontIcon from "./house-solid.svg"

export default function Toolbar() {
    return (
    <div className="bg-light p-4 border-bottom">  
        <ToolbarButton icon={colorIcon} onclick={() => alert("Set Font Color!")}/>
        <ToolbarButton icon={fontIcon} onClick={() => alert("Set font family!")}/>
    </div>
    )
    }
