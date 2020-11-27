import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';

function User({ user, onRemove, onToggle, onNext, index }) {
    const { username, email, id, active } = user;
    const [show, toggleShow] = useState(false);
    useEffect(() => {
        // console.log('설정댐');
        // console.log(user);
        return () => {
            // console.log('바뀌기전');
            alert('삭제됐습니다.');
            // console.log(user);
        }
    }, [user]);
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }} onClick={() => onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            <button onClick={() => toggleShow(!show)}>추가</button>
            <AddUser onNext={onNext} index={index} show={show} toggleShow={toggleShow} />
        </div>
    )
}

function UserList({ users, onRemove, onToggle, onNext }) {
    return (
        <div>
            {
                users.map( 
                    (user, index) => (<User user={user} index={index} key={user.id} onRemove={onRemove} onToggle={onToggle} onNext={onNext} />)
                )
            }
        </div>
    )
}

export default UserList;