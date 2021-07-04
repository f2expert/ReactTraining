import React, { useState, useEffect } from 'react'

function LoginComponent() {

    const [userName, setUserName] = useState('Ram');
    const [password, setPassword] = useState('Raja');

    useEffect(() => {
        console.log('state got updated')
    })

    useEffect(()=>{
        console.log('user name has been updated')
    }, [])

    useEffect(()=>{
        console.log('user name has been updated')
    }, [password]);
    
    return (
        <div>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <input type="text" />
        </div>
    )
}

export default LoginComponent
