import React, { useState } from 'react'
import { X } from 'lucide-react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...tasks]

    copyTask.push({ title, details })
    setTasks(copyTask)

    console.log(copyTask)


    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...tasks]
    copyTask.splice(idx,1)
    setTasks(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex gap-5 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-3xl font-bold'>Add Notes </h1>
        <input
          type="text"
          placeholder='Enter notes Heading'
          className='px-5 py-2 w-full font-medium outline-none border-2 rounded'
          value={title} onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          className='px-5 h-30 w-full py-2 font-medium outline-none border-2 rounded'
          type="text"
          placeholder='Enter Details'
          value={details} onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button
          className='bg-white w-full active:bg-gray-400 text-black px-5 py-2 rounderd'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes </h1>
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
          {tasks.map(function (elem, idx) {
            return <div key={idx}
              className="flex justify-between flex-col items-start realtive h-52 w-40 rounded-xl text-black p-4 bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-1.png)] bg-cover bg-center">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95  bg-red-600 text-white text-xs rounded font-bold '>Delete</button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App