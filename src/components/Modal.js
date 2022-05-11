import Card from "./UI/Card"
import style from './Modal.module.css';
import Button from "./UI/Button";

function Modal(props) {
  
    return (
        <div>
           <Card className={style.modal}>
            <header className={style.header}>
               Delete Card
            </header>
            <div className={style.content}>
               Delete user?
            </div>
            <footer className={style.actions}>
                <button onClick={props.onDelete} id={props.id}>yes</button>
                <Button onClick={() => props.none(false)}>no</Button>
            </footer>
            </Card>
      
        </div>
    )
}

export default Modal