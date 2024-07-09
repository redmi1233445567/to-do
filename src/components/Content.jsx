import React, { useReducer, useRef, useState } from 'react'
import { data } from '../data/Data'



export default function Content() {
  const [da, setDa] = useState(data)
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const ref1 = useRef()
  const ref2 = useRef();
  const ref0 = useRef();

  const All = () => {
    ref1.current.className = "";
    ref2.current.className = "";
    ref0.current.className = "active";
    forceUpdate()
    setDa(data)
  }

  const clickActive = (item) => {
    console.log(item);
    if(item.done === true) {
      item.done = false;
    }else {
      item.done = true
    }
    console.log(data);
    forceUpdate()
  }

  const active = () =>{
    let filteredUsers = [];
    for (let i= 0; i<data.length; i++) {
        if (data[i].done === false) {
        filteredUsers = [...filteredUsers, data[i]];
      }
    }

    setDa(filteredUsers);
    console.log(filteredUsers);
    ref1.current.className = "active";
    ref2.current.className = "";
    ref0.current.className = "";
    forceUpdate()
  }

  const Complited = () =>{
    let filteredUsers = [];
    for (let i= 0; i<data.length; i++) {
        if (data[i].done === true) {
        filteredUsers = [...filteredUsers, data[i]];
      }
    }

    setDa(filteredUsers);
    console.log(filteredUsers);
    ref1.current.className = "";
    ref2.current.className = "active";
    ref0.current.className = "";
    forceUpdate()
  }

  

  const clearAll = () => {
    for (let i= 0; i<data.length; i++) {
      if (data[i].done === true || data[i].done === false) {
      data.pop(data[i])
    }
  }
    setDa(data);
    forceUpdate()
  }

  const clearOne = (item) => {
    for (let i= 0; i<data.length; i++) {
      if (data[i].id === item) {
        data.pop(data[i])
      }
    }
    setDa(data);
    forceUpdate()
  }
  
  return (
    <div className='content'>
        {da.map(function (da){
          return (
            <div className='text2'>
              <div className='box'>
                <input type='checkbox' name='check' value='no' className='check' onClick={() => clickActive(da)}/>
                <p className={da.done === true ? "done" : ""}>{da.text}</p>
                <p onClick={() => clearOne(da.id)}>X</p>
              </div>
            </div>
          )
        })}
      <div className='filter'> 
        <div className='p'>
            <p>{da.length} items left</p>
            <p onClick={clearAll}>Clear All</p>
        </div>
        <div>
            <span ref={ref0} onClick={All}>All</span>
            <span ref={ref1} onClick={active}>Active</span>
            <span ref={ref2} onClick={Complited}>Complited</span>
        </div>
      </div>
    </div>
  )
}
