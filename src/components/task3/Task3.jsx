import React, { useState } from 'react'
import "./Task3.css"

let img1 = "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png"
let img2 = "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png"
let img3 = "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
let img4 = "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png"
// import next from "../assets/next.png"
// import back from "../assets/back.png"


const Task4 = () => {

  let images = [img1,img2,img3,img4]
  const [imgIndex, setImageIndex] = useState(0)
  const [color,setColor] = useState("2px solid red")


  const handleImage = (i)=>{
      setImageIndex(i)
  }

  const  handlePre = ()=>{

    if(imgIndex >0 && imgIndex < 4){
      setImageIndex(imgIndex-1)
      
    }

   
  }

  const handleNext = ()=>{
    if(imgIndex >=0 && imgIndex < 3){
      setImageIndex(imgIndex+1)
      setColor("2px solid green")


    }

   
    

    
  }

  return (
    <div className='container'>

      <div className='main-img'>
        <img className='main-image' src={images[imgIndex]} alt="" />
      </div>
      

      <div className='img-container d-flex justify-content-evenly   align-items-center' >
        <div className="widgets">
        <div className='icon-con  ' >
        <button onClick={handlePre}>{"<"}</button>
        </div>
        {
          images.map((item, i)=>(

            <img onClick={()=>handleImage(i)} className='small-img' style={{color}} key={i} src={item} alt="" />

          ))
        }
        <div className='icon-con'>
        <button onClick={handleNext} >{">"}</button>
        </div>
</div>
      </div>


    </div>
  )
}

export default Task4