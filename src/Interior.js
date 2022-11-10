import React from 'react';

const Interior =(props)=>{
   console.log(props)

   return(

    <div className='blogCard'>
    <div className='blogss'>

        <h3 className='title'>{props.item}</h3>
        <p className='pat'>{props.description}</p>
      
        </div>
        </div>


   )



}
export default Interior

