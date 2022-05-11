import { useRef, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal';
import style from './AddUser.module.css'

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const inputRef = useRef()
    const [isError, setError] = useState(false)

    const addUserHandler = event => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return;
        }
        // console.log(inputRef);
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')

    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }


    return (
        <div>
            {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={errorHandler} />}
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input type="text" id='username' value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age" >Age</label>
                    <input type="number" id='age' value={enteredAge} onChange={ageChangeHandler} />
                    {/* <label htmlFor="ref" >Ref</label>
                    <input ref={inputRef} id='ref' /> */}
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser