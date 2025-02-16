import SlideThumbnail from "./SlideThumbnail";
import thumbnailImage1 from "./thumbnail2.png"
import thumbnailImage2 from "./thumbnail3.png"
import thumbnailImage3 from "./thumbnail4.png"

const testSlides = [
    {
        id: 0,
        order: 1,
        image: thumbnailImage1
    }, 
    {
        id: 1,
        order: 2,
        image: thumbnailImage2
    }, 

    {
        id: 2,
        order: 3,
        image: thumbnailImage3
    }, 
    {
        id: 3,
        order: 4,
        image: thumbnailImage3
    }, 

]


export default function Sidebar() {
    return (
    <div className="border-end bg-light p-4 d-flex flex-column">
        { testSlides.map ( slide => <SlideThumbnail key={slide.id} slide={ slide }/>) }
      
        </div>
    )
}