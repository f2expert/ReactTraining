import React, { useRef, useEffect, useState } from 'react'

function RefComponent() {
    const userRef = useRef();
    const [userName, setUserName] = useState();
    const [user, setUser] = useState();

    const getData = () => {
        console.log(userRef.current.value, '-----', userRef.current.type);
    }

    useEffect(() => {   
        console.log('component loaded');    
       // userRef.current.focus();
    }, []);

    useEffect(() => {
        console.log('component updated');
    });

    useEffect(() => {        
        console.log('component updating');
    }, [user]);

    return (
        <>
            <input ref={userRef} />
            <input type="text" onChange={(event) => setUserName(event.target.value)} />
            <button onClick={() => getData()}>Save</button>
        </>
    )
}

export default RefComponent