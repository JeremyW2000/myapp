import React, {useState, useContext} from 'react'
import {AccountContext} from "./Account";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault();  

        authenticate(email, password )
        .then((data) => {
            console.log("logged in", data);
        }).catch((err) => {
            console.log("login failed", err);
        });
    };

  return (
    <div className="flex justify-center w-96 bg-slate-50 rounded-lg shadow-lg py-10">
        <form className="grid flex justify-items-center"onSubmit={onSubmit}>
            <label>
                Email
            </label>
            <input
            className = "border flex rounded-lg shadow-md"
            value ={email}
            onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label>
                Password
            </label>
            <input
            className = "border flex rounded-lg shadow-md"
            value ={password}
            onChange={(event) => setPassword(event.target.value)}
            ></input>
            <div className="py-5">
            <button type="submit" className="flex justify-center rounded-lg shadow-md border w-20">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login