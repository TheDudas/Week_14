/* eslint-disable react/prop-types */
// this gets the order and data from the data.js file and displays it for App. 

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
