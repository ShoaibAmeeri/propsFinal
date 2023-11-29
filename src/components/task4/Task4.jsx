// /Task4: object
import React from "react";
import { useState } from "react";
import "./Task4.css"
import Nav from "../compos/Nav";
import Item from "../compos/Item";
 function Task4() {
    let products = [
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
      {
        id: 102,
        title: "Zinger Stacker Combo",
        desc: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
        price: 850,
      },
      {
        id: 103,
        title: "Twister Combo",
        desc: "Twister + 1 Regular fries + 1 Regular drink ",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
        price: 670,
      },
      {
        id: 104,
        title: "Family Festival 3",
        desc: "An ultimate meal for the fam. It includes 4 Zinger burgers",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
        price: 2520,
      },
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
    ];
  
    const [product, setProduct] = useState(products);
  
    // let count = 0
    let [counter, setCounter] = useState(0);
    let [total, setTotal] = useState(0);
    
    const plus = (event , param) => {
        setCounter(++counter);
        setTotal(total + param);
    
    }
    const reset=()=>{
        setCounter(0)
        setTotal(0)
      }
    
  
    return (
    
      <>
       <Nav counter={counter} total={total} onClick={reset}/>
       
        <div className="container-fluid  sec my-5">
          {products.map((item, index) => (
                <Item  title={item.title} image={item.image} desc={item.desc} price={item.price} key={index} onClick={event => plus(event, item.price)}/>

          
            
          ))}
        </div>
      </>
    );
  }

  export default Task4