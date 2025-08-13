import React from 'react'
import watch from '../assets/img/watch.mp4'
// import ear from '../assets/img/ear.mp4'
import neck from '../assets/img/neck.mp4'
import head from '../assets/img/headph.mp4'
import speaker from '../assets/img/speaker.mp4'
import { Seller } from './Seller'
const ear = '/src/assets/img/ear.mp4'; // Or use the import statement as shown above


export const Seller1 = () => {
  return (
   <div>
    <h3 className='sales'>Best Sellers</h3>
     <div className='cate1'>
        <Seller video={watch} name="Smart watch"/>
        <Seller video={ear} name="Wireless Earbuds"/>
        <Seller video={neck} name="Neckband"/>
        <Seller video={head} name="Headphones"/>
        <Seller video={speaker} name="Speakers"/>
        <Seller video={ear} name="Earbuds"/>
      
    </div>
   </div>
  )
}
