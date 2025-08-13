import React from 'react'
import { Pod1 } from './Pod1'

export const Bigdeal = () => {
  return (
    <div>
        <h3 className='sales'>Big Deal</h3>
        <img className="bigimg" src="https://www.boat-lifestyle.com/cdn/shop/files/Artboard_2_afce0938-0d00-44af-a1e4-a7953f07731e_1600x.png?v=1737914875" alt="" />
         <div className='dopes'>
                {/* <Pod1 img={img} alt="img" /> */}
                
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049' name="boat Airdopes 131" price='856' mrp='1566'ofr='56' alt="launch" ply="60 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-235-Pro.jpg?v=1682579854'name="boat rockers 235 pro" price='899' mrp='1999'ofr='55' alt="launch" ply="20 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_750.jpg?v=1699500834'name="boat stone 750" price='1499' mrp='1999'ofr='55' alt="launch" ply="20 hrs playback"/> 
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848'name="boat airdopes 330 pro" price='1199' mrp='1999'ofr='35' alt="launch" ply="20 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848'name="boat storm plus" price='999' mrp='1999'ofr='45' alt="launch" ply="40 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_3.jpg?v=1712640243'name="boat 280 ANC" price='899' mrp='1999'ofr='55' alt="launch" ply="60 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848'name="boat airdopes 330 pro" price='1199' mrp='1999'ofr='35' alt="launch" ply="20 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_311_Pro.jpg?v=1716880848'name="boat storm plus" price='999' mrp='1999'ofr='45' alt="launch" ply="40 hrs playback"/>
                <Pod1 img='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_3.jpg?v=1712640243'name="boat 280 ANC" price='899' mrp='1999'ofr='55' alt="launch" ply="60 hrs playback"/>
            </div>
    </div>
  )
}
