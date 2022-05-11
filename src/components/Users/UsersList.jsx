// import Button from '../UI/Button'
import { useState } from 'react'
import Delete from '../Delete'
import Card from '../UI/Card'
import style from './UsersList.module.css'

const UsersList = (props) => {
 const [userDone,setUserDone] = useState(false)
    const deleteUser = (e) => {
      props.setUserList(
          props.users.filter((el) => {
              if(el.id !== e.target.id){
                  return []
              }
          })
      )
    }

    return (
        <Card className={style.users}>
            <ul>
                {props.users.map(el => {
                 return <li className={style.li} key={el.id} id={el.id}>
                        {el.name} {el.age} years old
                       <Delete onDelete={deleteUser} id={el.id} />
                    </li>
                    
                        })}
            </ul>
        </Card>

    )
}

export default UsersList