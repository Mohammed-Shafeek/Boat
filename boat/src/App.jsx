import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './comp/nav'
import { Banner } from './comp/Banner'
import Pods from './comp/Pods'
import { Bigdeal } from './comp/Bigdeal'
import { Category1 } from './comp/Category1'
import { Seller1 } from './comp/Seller1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Nav />
      <Banner/>
      <Pods/>
      <Bigdeal/>
      <Category1/>
      <Seller1/>
      </div>  
    </>
  )
}

export default App
