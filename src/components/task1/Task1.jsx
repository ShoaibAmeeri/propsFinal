import Item from "../compos/Item";
import Nav from "../compos/Nav";
import"./task1.css"
import { useState } from 'react';
const Task1 =()=>{
  let product = {
    id: 101,
    title: "Krunch Combo",
    desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
    image:
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
    price: 520,
  };

  let [counter, setCounter] = useState(0);
  let [total, setTotal] = useState(0);

  const clickHandle=()=>{
    setCounter(++counter);
    setTotal(total+=product.price)
  }

  const reset=()=>{
    setCounter(0)
    setTotal(0)
  }


  return (
    <>
     <Nav counter={counter} total={total} onClick={reset}/>
     <div className="container my-5">
    
<Item title={product.title} image={product.image} desc={product.desc} price={product.price} onClick={clickHandle}/>
</div>
    </>

)
}
export default Task1

