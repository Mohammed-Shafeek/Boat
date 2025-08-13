// import React from 'react'
// import img2 from '../assets/img/2.webp'
// import img3 from '../assets/img/5.svg'
// import img4 from '../assets/img/6.svg'
// import img5 from '../assets/img/7.svg'
// import img6 from '../assets/img/8.svg'



// export const Banner = () => {
//   return (
//     <div>
//       <div class="carousel" >
//       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/main_banner_new_f208846e-2c93-4372-812c-d504c1ee8620_1440x.jpg?v=1737914875" alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/web_2_1440x.jpg?v=1737548537" alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228" alt="Third slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/shop-now-desk_1440x.png?v=1735363463" alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228" alt="Second slide"/>
//     </div>
    
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
//       {/* <div class='carousel-inner'>

//         <div><img class='ban' src='https://www.boat-lifestyle.com/cdn/shop/files/web_copy_3_1440x.png?v=1739443336' alt="" /></div>
//         <div><img class='ban' src='https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228' alt="" /></div>
//         <div><img class='ban' src='https://www.boat-lifestyle.com/cdn/shop/files/Artboard_2_copy_1440x.png?v=1734675592' alt="" /></div>
//         <div><img class='ban' src='https://www.boat-lifestyle.com/cdn/shop/files/Artboard_4_copy_7_1440x.png?v=1739601070' alt="" /></div>
//       </div> */}
//       </div>
//       <div className='d-flex' id='ban1'>
//       <div className='d-flex'>
//           <img src={img3} alt="" />
//           <p><b>1 year</b><br />Warranty</p>
//         </div>
//         <div className='d-flex'>
//           <img src={img4} alt="" />
//           <p><b>7 day</b><br />Replacement</p>
//         </div>
//         <div className='d-flex'>
//           <img src={img5} alt="" />
//           <p><b>Free express</b><br />Delivery</p>
//         </div>
//         <div className='d-flex'>
//           <img src={img6} alt="" />
//           <p><b>1 year</b><br />Warranty</p>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import img2 from '../assets/img/2.webp';
import img3 from '../assets/img/5.svg';
import img4 from '../assets/img/6.svg';
import img5 from '../assets/img/7.svg';
import img6 from '../assets/img/8.svg';

export const Banner = () => {
  return (
    <div>
      <div className="carousel" >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/main_banner_new_f208846e-2c93-4372-812c-d504c1ee8620_1440x.jpg?v=1737914875" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/web_2_1440x.jpg?v=1737548537" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/shop-now-desk_1440x.png?v=1735363463" alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228" alt="Fifth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <p>shafeek</p>

      <div className="d-flex" id="ban1">
        <div className="d-flex">
          <img src={img3} alt="" />
          <p><b>1 year</b><br />Warranty</p>
        </div>
        <div className="d-flex">
          <img src={img4} alt="" />
          <p><b>7 day</b><br />Replacement</p>
        </div>
        <div className="d-flex">
          <img src={img5} alt="" />
          <p><b>Free express</b><br />Delivery</p>
        </div>
        <div className="d-flex">
          <img src={img6} alt="" />
          <p><b>1 year</b><br />Warranty</p>
        </div>
      </div>
    </div>
  );
};
