import './App.css';
import { useState } from 'react';
import Table from './components/Table';
import Register from './components/Register';

function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const onInsert = (user) => {
    const newUser = {
      name: user.name,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
    };
    setUserList([...userList, newUser]);
  };

  const onUpdate = (index, updatedUser) => {
    const newList = userList.map((user, i) =>
      i === index ? updatedUser : user
    );
    setUserList(newList);
  };

  const onDelete = (index) => {
    const newList = userList.filter((_, i) => i !== index);
    setUserList(newList);
  };

  return (
    <>
      <Table 
        userList={userList} 
        onUpdate={onUpdate} 
        onDelete={onDelete} 
      />
      <Register onInsert={onInsert} />
    </>
  );
}

export default App;
