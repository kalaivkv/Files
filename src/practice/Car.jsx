import React from 'react';
import photo from './Header.module.css'

function car(props) {

  const {carInfo } = props
  const {Brand , Color } = carInfo;
 

  return (
    <div>
       <h1 className={photo.left} >I'm a  {Color} {Brand} car   </h1>
       <p className={photo.left}>kalai</p>
       
    </div>
  );
}

export default car
