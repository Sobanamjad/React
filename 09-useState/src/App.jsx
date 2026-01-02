import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20)
  const [username, setUser] = useState('Soban')

  function changevalue(){
    setA(40)
    setUser('Hana')
  }
  return (
    <div>
      <h1>Value of a is {a} <br /><br />value of user is {username}</h1>
      <button onClick={changevalue}>Click</button>
    </div>
  )
}

export default App
