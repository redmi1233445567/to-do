import React, { useRef } from 'react'
import sun from '../img/sun.png'
import moon from '../img/moon.png'

export default function Head() {
  const ref1 = useRef()
  const ref2 = useRef()
  const body = document.querySelector(".bodyd");
  function clickSun() {
    const input = document.querySelector(".inputd");
    const cont = document.querySelector(".content");
    ref1.current.className = "none"
    ref2.current.className = "block"
    body.className = 'bodyl';
    input.className = "inputl";
    cont.className = "contentl"
  }

  function clickMon() {
    const body = document.querySelector(".bodyl");
    const input = document.querySelector(".inputl");
    const cont = document.querySelector(".contentl");
    ref2.current.className = "none"
    ref1.current.className = "block"
    body.className = "bodyd";
    input.className = "inputd";
    cont.className = "content"
  }
  return (
    <div className='head'>
      <h1>TODO</h1>
      <div>
        <img src={sun} alt='sorry' ref={ref1} onClick={clickSun}/>
        <img src={moon} alt='sorry' ref={ref2} onClick={clickMon}/>
      </div>
    </div>
  )
}
