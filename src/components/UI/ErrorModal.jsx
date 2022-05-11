import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import style from './ErrorModal.module.css'

const Overlay = props => {
    return <div className={style.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = props => {
    return (
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.message}</p>
            </div>
            <footer className={style.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Overlay onClick={props.onConfirm} />, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById("modal-overlay"))}
        </>
    )

}

export default ErrorModal 