import React from 'react'
import { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')
 
  const submithandle = (e) =>{
    e.preventDefault()
    console.log('Form Submitted by', text)
    setText('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandle(e)
      }}>
        <input 
        type='text' 
        placeholder='Enter Your Name' 
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }

        }
        />
        <button> Submit</button>
      </form>
    </div>
  ) 
}

export default App