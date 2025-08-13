import React from 'react'

export const Category = ({img,name}) => {
  return (
    <div className='cate'>
        <img src={img} alt="img" />
        <p>{name}</p>
    </div>
  )
}
