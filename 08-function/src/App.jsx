import React from 'react'

const App = () => {

  // function btnClick(){
  //   console.log('Button is Click')
  // }
  // function mouseenter(){
  //   console.log('Mouse enter')
  // }

  function inputchanging(val){
    console.log(val)
  }
  return (
    <div>
      <h1>Hello; Soban</h1>
      {/* <button onMouseEnter={mouseenter} onClick={btnClick}>change User</button> */}
      {/* <button onClick={(elem) =>{
        console.log(elem)
      }}>Click Me</button> */}

      {/* <input type="text" placeholder='Enter Name' 
      onChange={(elem) =>{
        console.log(elem.target.value)
      }}
      /> */}

      <input type="text" placeholder='Enter Name' 
        onChange={(elem) =>{
        inputchanging(elem.target.value)
        }}
      />
    </div>
  )
}

export default App
