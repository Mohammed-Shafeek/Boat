// import React from 'react'

// export const Seller = ({video,name}) => {
//   return (
//     <div>
//         <video src={video}></video>
//         <p>{name}</p>
//     </div>
//   )
// }
import React from 'react'

export const Seller = ({ video, name }) => {
  return (
    <div  style={{ margin: '20px', textAlign: 'center',width:"550px" }}>
      <video src={video} controls preload="metadata" style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p style={{ fontSize: '1.2rem', marginTop: '10px', fontWeight: 'bold' }}>{name}</p>
    </div>
  )
}
