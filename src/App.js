import { useState } from 'react'
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'


function App() {

  const [userList, setUserList] = useState ([])

  const addUserHandler = (userName, userAge) => {
    setUserList(prevUserlist => {
       return [...prevUserlist, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  
  return (
    <div className="App">
      {/* {console.log(userList)} */}
       <AddUser onAddUser={addUserHandler} />
       <UsersList setUserList={setUserList} users={userList} />
    </div>
  );
}

export default App;
