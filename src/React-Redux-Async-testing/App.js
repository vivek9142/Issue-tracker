import { useDispatch } from 'react-redux';

import { UsersComponent } from "./features/users/UsersComponent";
import { loadUsersAsync } from "./features/users/userSlice";

const App = () => {
    const dispatch = useDispatch()
    dispatch(loadUsersAsync())

    return < UsersComponent heading={"Demo of UserInfo - Using React Redux ( async thunk )"}/>
}

export default App;
