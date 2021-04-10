import React, { useRef, useEffect } from 'react'

function RefComponent() {
    const userRef = useRef();
    const getData = () => {
        console.log(userRef.current.value);
    }

    useEffect(() => {        
        userRef.current.focus();
    }, []);

    return (
        <div id="dfsf">
            <input ref={userRef} type="text" />
            <button onClick={() => getData()}>Save</button>
        </div>
    )
}

export default RefComponent
