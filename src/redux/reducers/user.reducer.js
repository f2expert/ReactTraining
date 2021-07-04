const ADDUSER = 'ADDUSER';
const UPDATEUSER = 'UPDATEUSER';
const DELETEUSER = 'DELETEUSER';

const initialUser = [
    {
        userName:'Sushil',
        password:'12345'
    }
];

const UserReducer = (store = initialUser, action) => {
    switch (action.type){
        case ADDUSER :
            return [...store, {userName:'Satya', password:'54321'}]
            break;
        case UPDATEUSER:
                return [...store, store[0].userName="Raja"]
            break;
        case DELETEUSER:
                return store.splice(1)
            break;
        default :
            return store;
    }
}

export default UserReducer;