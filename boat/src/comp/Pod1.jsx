import React from 'react'

export const Pod1 = ({img,alt,ply,name,price,mrp,ofr}) => {
  return (
    <div class="air-cont">
    <div className='cont'>
        <p className='ofr'>{alt}</p>
        <img  className="pod" src={img} alt="img" />
        <p className='ply'>{ply}</p>
    </div>
    <div>
       <h5>{name}</h5>
       <div>
        <h5>Rs.{price}</h5>
        <div class= 'd-flex'>
          <del>{mrp}</del>
          <p className='offer'>{ofr}%off</p>
        </div>
       </div>
    </div>
    </div>
  )
    
}
