import thumbnailImage from "./music-unsplash.jpg"

export default function SlideThumbnail({ slide }: { slide: { order: number, image: string}}) {
    let slideNumber = 2
    return (
        <>
            <span>{ slide.order }</span>
            <img src={slide.image} onClick={() => alert("Selected!")}/>
        </>
    ) 
}