import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
// import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };
    const [users, setUsers] = useState([
      {
          id: 1,
          username: 'printline',
          email: 'test@naver.com',
          active: true,
      },
      {
          id: 2,
          username: 'txt',
          email: 'txt@naver.com',
          active: false,
      },
      {
          id: 3,
          username: 'asdf',
          email: 'asdf@naver.com',
          active: false,
      },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
    alert('정상적으로 추가됐습니다.');
  }

  const onRemove = id => {
    if ( !window.confirm('정말 삭제하시겠습니까?') ) return false;
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ))
  }

  const onNext = ( props ) => {
    const { username, email, index } = props;
    const newUser = {
      id: nextId.current,
      username,
      email,
      active: false,
    }
    setUsers([
      ...users.slice(0, index+1),
      newUser,
      ...users.slice(index+1)
    ]);
    nextId.current += 1;
    alert('정상적으로 추가됐습니다.');
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} show={true} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} onNext={onNext} />
    </>
  );
}

export default App;
