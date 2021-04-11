import React, { useState } from 'react'

function LoginComponent() {

    const [userName, setUserName] = useState('Ram');
    const [password, setPassword] = useState('Raja');
    return (
        <div>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <input type="text" />
        </div>
    )
}

export default LoginComponent
