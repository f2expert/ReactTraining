import React, { useState } from 'react'

function LoginComponent() {

    const [userName, setUserName] = useState('Ram');
    const [password, setPassword] = useState('Raja');

    let raja = 'static data';
    return (
        <div>
            {userName}
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <br />
            {raja}
            <hr />
            {userName}
            <br />
            <input type="text" />
            {userName}=={raja}
        </div>
    )
}

export default LoginComponent
