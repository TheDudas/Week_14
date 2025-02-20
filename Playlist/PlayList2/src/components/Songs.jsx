/* eslint-disable react/prop-types */
export default function Song({song}) {
      
    return  (
    <>
    <div>
        <p>{song.songTitle }</p>
        <p>{song.album}</p>
        <p>{song.band}</p>
    </div> 
    </>
    )
}
