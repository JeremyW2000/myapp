import Product from "./components/product";
import axios from 'axios';
import { useState, useEffect } from "react";
import MyForm from "./components/MyForm";
import { useCookies } from 'react-cookie';






function App() {

  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");

  
  const [cookies, setCookie, removeCookie] = useCookies(['email']);



  //runs on reload
  useEffect(() => {

    //checking for email
    if (cookies["email"] != undefined) {
      setEmail(cookies["email"])
    }
    //getting all data
    axios.get(
      "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/products", {
      })
      .then(function (response) {
        setProducts(response["data"]["products"]["Items"]);
      })
    }, [])

    //cookies for storing email of the user
    const setCookieFunction = (value) => {
        //if (cookies["email"] === undefined){
          setCookie("email",value);
        //}
    }

  return (
    <div className="">
      <header className="w-screen h-20 shadow-lg bg-slate-300 flex justify-center py-5">
        <h1 className="text-3xl font-bold ">
            myStore
        </h1>
      </header>
        <div className="w-screen py-10 h-10 flex justify-center bg-slate-600 ">
          <MyForm setEmail={setCookieFunction}/>
        </div>
        <div className="bg-slate-400 flex justify-center">
          {products.map((product, index) => (
            <Product key={index} prod={product["ownerEmail"] === email ? product: null} />
          ))}
        </div>
    </div>
  );
}

export default App;
