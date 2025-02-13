import React from 'react'
import Car from './Car';
import { useState } from 'react';

function modle ()  {
    // const isGun = false;
    // const price = "2000";
    // const carInfo = { Brand : "Ferrari",Color :"Violet" }
    // const [color , setColor]= useState('Yellow')

    // const carList = [
    //   {Brand : "BMW" , Color : "Black"},
    //   {Brand : "MAHINDRA" , Color : "Blue"},
    //   {Brand : "TESLA" , Color : "White"}
    // ]
    const [scooter , setScooter] = useState([]);
    const [count , setCount] = useState(1);
    // function update(){
    //   setScooter((prev)=>{
    //       return {...prev , Color:"Red"};
    //            }
    //   )
    // }
    // console.log(scooter)

    function addItem (){
        const  item = 'Product'+count;
        setScooter((previousState)=>{
          return(
            [...previousState,item]
          )
        })
        setCount((previousSate)=> { 
          return (previousSate+1);
        })
        
    }
  
  return (
    <div>
        <h1>Killing </h1>
        <button onClick={addItem}>Add Item</button>

        <ul>
          {
            scooter.map((value,index)=>{
              return(
                <li key={index}>{value}</li>
              )
            })
          }
        </ul>

        

        {/* <h1>This is my {scooter.Color} color {scooter.Brand} scooter ({scooter.Year}) </h1>
        <button onClick={update}>change</button> */}

        {/* <h2>This is {color} color </h2>
        <button onClick={()=>setColor('Black') }>change</button> */}

        {/* { carInfo.Brand !== undefined && carInfo.Color !== undefined ? <Car  lingam={carInfo} /> : null } */}
        {/* {isGun ? <h1>Door open</h1> : <h1>Door closed</h1> } */}
        {/* <Car  carInfo={carInfo} /> */}

        {/* <ul>
          {
            carList.map((travel) => 
             
              <li key={travel.Brand} ><Car carInfo={travel}  /> </li>
             
            )
          }
        </ul> */}

    </div>
  )
}

export default modle;
