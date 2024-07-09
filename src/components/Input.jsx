import React, { useRef } from 'react'
import { data } from '../data/Data'

export default function Input() {
  const ref1 = useRef()
  function clickInp () {
    const val = ref1.current.value;
    data.push({id: Math.random(), text: val, done: false})
    console.log(data);
    ref1.current.value = ""
  }

  return (
    <div className='inputd'>
      <input onClick={clickInp} type='checkbox' name='check' value='no' className='check'/>
      <input ref={ref1} type='text' placeholder='Currently Typing' className='text'/>
    </div>
  )
}
