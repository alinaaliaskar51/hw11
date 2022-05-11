import { useState } from "react"
import Modal  from "./Modal";
import Button from "./UI/Button";

function Delete(props) {
    const [res,setRes] = useState(false);
   return <div>
  
 <Button onClick={() => {setRes(true) }}>delete</Button>
 {res && <Modal onDelete={props.onDelete} id={props.id} none={setRes} /> }

    </div>

}

export default Delete