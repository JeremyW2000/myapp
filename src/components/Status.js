import React, {useState, useContext, useEffect }from 'react'
import { AccountContext } from './Account'

const Status = (props) => { 
    const [loginStatus, setLoginStatus] = useState(false);
    const { getSession, signout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((session) => {
            console.log("Session: ", session);
            setLoginStatus(true);
        });
    }, []);
    return (<div>
        {loginStatus ? (<button onClick={signout}>Logout</button>) : null}
    </div>)
}

export default Status