import Product from "./components/product";
import axios from 'axios';
import { useState, useEffect } from "react";
import MyForm from "./components/MyForm";





function App() {

  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
      axios.get(
        "https://tl6cquf24c.execute-api.ap-southeast-2.amazonaws.com/prod/products", {
        })
        .then(function (response) {
          setProducts(response["data"]["products"]["Items"]);
          console.log(response["data"]["products"]["Items"])
          console.log("got data")
        })
      }, [])



  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1 className="text-3xl font-bold underline">myStore </h1>
      <h1>{email}</h1>
      <MyForm setEmail={setEmail}/>

      {products.map((product, index) => (
        <Product key={index} prod={product["ownerEmail"] === email ? product: null} />
      ))}
      
      
    </div>
  );
}

export default App;
