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
    }, [getSession]);
    return (<div className="flex justify-self-center py-5">
        {loginStatus ? (<button className="flex rounded-lg shadow-lg bg-slate-100 justify-self-center w-32" onClick={signout}>Logout</button>) : null}
    </div>)
}

export default Status