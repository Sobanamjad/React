import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({ user: 'Soban', age: 20})
  const [arr, setArr] = useState([10,20,30,40])
  const [info, setInfo] = useState({ user:'soban',age:12})

  const [detail, setDetail] = useState(10)

  const btnClick = () =>{
    // object asy get krty ha {}
    const newNum = {...num}
    newNum.user = 'Kashaf'
    newNum.age = 29
    setNum(newNum)
    // second Snippet code 
    // Array asy get krty ha []
    const newArr = [...arr]
    newArr.push(90)
    setArr(newArr)

    // value change in array
    setInfo(prev=>({...prev,age:50}))

    // batch update means detail + 1 br br likhy gy tw value ek dafa he bary gi like 
    // setDetail(detail + 1)
    // setDetail(detail + 1)
    // setDetail(detail + 1)

    // isy kehty ha batch update
    setDetail(prev =>( prev + 1 ))
    setDetail(prev =>( prev + 1 ))
    setDetail(prev =>( prev + 1 ))
    
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <h2>{arr}</h2>
      <h2>{detail}</h2>
      <h3> {info.user} ,{info.age}</h3>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
