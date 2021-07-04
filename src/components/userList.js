import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function UserList() {
    const users = useSelector(store => store.user);
    const dispatch = useDispatch();
    return (
        <div>
            {users[0].userName}
            <button onClick={() => dispatch({type:'ADDUSERa', data:''})}>Add</button>
            <button onClick={() => dispatch({type:'UPDATEUSER', data:''})}>Update</button>
            <button onClick={() => dispatch({type:'DELETEUSER', data:''})}>Del</button>
        </div>
    )
}
