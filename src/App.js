import Product from "./components/product";
import axios from 'axios';
import { useState, useEffect } from "react";
import MyForm from "./components/MyForm";
import { useCookies } from 'react-cookie';
import CreateProductForm from "./components/CreateProductForm";






function App() {


  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['email']);
  const [loggedIn, setLogin] = useState(false);
  

  //runs on reload
  useEffect(() => {

    //checking for email
    if (cookies["email"] !== undefined) {
      setEmail(cookies["email"])
    }

    //getting all data
    axios.get(
      "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/products", {
      })
      .then(function (response) {
        setProducts(response["data"]["products"]["Items"]);
      })
    }, [cookies])

    //cookies for storing email of the user
    const setCookieFunction = (value) => {
      setLogin(true)
      setEmail(value)
      setCookie("email",value);
    }

    const postProduct = (value) => {
      axios.post (
        "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/product", value
      )
    }

    const getNewObject = (e) => {
      e["email"] = email
      console.log(e)
      postProduct(e);
  }

    const handleLogout = (e) => {
      setLogin(false)
      removeCookie("email")
      setEmail(undefined)
    }
    const renderForm = () => {
      if (loggedIn === false){
        return <MyForm setEmail={setCookieFunction}/>
      } else {
        return <button onClick={handleLogout}>logout</button>
      }
    };

    const uploadImage = (e) => {
      console.log(e.target.file["name"]);
    }

  return (
    <div className="">
      <header className="w-screen h-20 shadow-lg bg-slate-300 flex justify-center py-5">
        <h1 className="text-3xl font-bold ">
            myStore
        </h1>
      </header>
        <div className="w-screen py-10 h-10 flex justify-center bg-slate-600 ">
          {renderForm()}
         
        </div>
        <div className="bg-slate-400 flex justify-center">
          {products.map((product, index) => (
            <Product key={index} prod={product["ownerEmail"] === email ? product: null} />
          ))}
        </div>

        <div>
          <input type="file" onChange={uploadImage}>
          </input>
          <CreateProductForm sendData={getNewObject}/>
        </div>

        <div>
        </div>
    </div>
  );
}

export default App;
