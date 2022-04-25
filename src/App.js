import Product from "./components/product";
import axios from 'axios';
import { useState, useEffect } from "react";
import MyForm from "./components/MyForm";
import { useCookies } from 'react-cookie';
import CreateProductForm from "./components/createProductForm";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {Account} from "./components/Account";
import Status from "./components/Status";




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
        "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/product", {
          "id": value["id"],
          "ownerEmail": email,
          "price": value["price"],
          "color": value["color"]
        }
      )
    }

    const deleteProduct = (e) => {
      console.log("deleting", e)
      axios.delete(
        "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/product" + "", {
          "id": e,
          "ownerEmail": email
        }
      )
      return false;
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

    const uploadImage = (e) => {
      console.log(e.target.file["name"]);
    }

    const renderAuthComponentns = () => {
      console.log(email)
      if (email === null ||email === undefined || email === "" || email === "null") {
          console.log("rendering Logged out view")
          return (
          <Account getUser={setCookieFunction} className="flex justify-items-center">
            <Login className="flex"/>
            <SignUp/> <Status />
          </Account>)
      } else {
        console.log("rendering logged in view")
        return (<><CreateProductForm sendData={getNewObject}/><Account getUser={setCookieFunction}><Status/></Account></>)
      }
      
    }

  return (
    <div className="">
      <header className="w-screen h-20 shadow-lg bg-slate-300 flex justify-center py-5">
        <h1 className="text-3xl font-bold ">
            myStore
        </h1>
      </header>
        <div className="">
         
        </div>
        <div>
        <div className="py-5">
          {products.map((product, index) => (
            <div className="flex justify-center py-1">
              <Product key={index} delete={deleteProduct} prod={product["ownerEmail"] === email ? product: null} />
            </div>
          ))}
          </div>
        </div>


        <div className=" py-10 flex justify-center">
            {renderAuthComponentns()}
        </div>
    </div>
  );
}

export default App;
