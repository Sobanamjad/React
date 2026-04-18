import React from 'react'

const App = () => {

  // Form ka by default behavior ha ky wo reload ho jata ha submit ky baad
  //   e.preventDefault() ya usy reload nhi hony deta 
  const submithandle = (e) =>{
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandle(e)
      }}>
        <input type='text' placeholder='Enter Your Name' />
        <button> Submit</button>
      </form>
    </div>
  ) 
}

export default App