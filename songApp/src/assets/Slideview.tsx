export default function Slideview() {
    const slideHeight = 400

    return ( 
    <div className="flex-grow-1 d-flex flex-column" >
        <div className="d-flex flex-grow-1 justify-items-center align-items-center bg-light">

        <div className="bg-white m-3 w-100 shadow-sm p-3 border" style={{ height: slideHeight + "5px"}}>Slide View</div> 
        </div>
        <div> 
            <textarea className="form-control" defaultValue="Speaker Notes"></textarea>
        </div>
    </div>
    )
}

