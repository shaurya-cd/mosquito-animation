import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useState } from 'react'

const App=()=> {
  const randomX = gsap.utils.random(-500,500,100)
  const randomY = gsap.utils.random(-200,200,100)
  const rotateX  = gsap.utils.random(-360,360,30)
  const [xvalue, setxvalue] = useState(0)
  const [yvalue, setyvalue] = useState(0)
  const [rotate,setrotate] = useState(0)

  const boxRef = useRef()

  useGSAP(()=>{
    gsap.to("img",{
      x:xvalue,
      duration:1,
      rotate:rotate,
      y:yvalue
    })
  },{scope:'main',dependencies:[xvalue,rotate,yvalue]})
  return (
    <main>
      <button onClick={()=>{
        setxvalue(randomX)
        setyvalue(randomY)
        setrotate(rotateX)
      }}>Animate</button>
        <div ref={boxRef}><img src="src\assets\PngItem_1495934.png" alt="" /></div>
    </main>
  )
}

export default App