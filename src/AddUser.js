import React, {useState} from 'react';
import CreateUser from './CreateUser';

function AddUser({ onNext, index, show, toggleShow }) {
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
    const onCreate = () => {
        onNext({ username, email, index });
        toggleShow(show => !show);
        setInputs({
            username: '',
            email: ''
        });
    }
    return <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} show={show} />;
}

export default AddUser;