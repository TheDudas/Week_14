import Button from 'react-bootstrap/Button';

export default function ToolbarButton(onClick)
   
 {
    return ( 
        <Button className="btn btn-outline-secondary me-3" 
        onClick={onClick}>Hello!
         </Button>
    )
}
