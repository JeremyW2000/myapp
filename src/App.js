import Product from "./components/product";
import axios from 'axios';
import { useState, useEffect } from "react";





function App() {

  const [products, setProducts] = useState([]);

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
      <h1 className="text-3xl font-bold underline">myStore </h1>
        

        
        {products.map((product, index) => (
        <Product key={index} prod={product} />
    ))}
      </header>
    </div>
  );
}

export default App;
