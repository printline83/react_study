import React from 'react';

function Hello({ color, name }) {
    return <div style={{
        color: color
    }}>안녕하세용 {name}</div>;
}
Hello.defaultProps = {
    name: '이름엄슴'
}

export default Hello;