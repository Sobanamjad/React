import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
            <h2 className='bg-white text-l font-semibold rounded-full h-6 w-6 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-sm leading-relaxed text-white mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, consequuntur.</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor:props.color }} className=' text-white text-sm font-medium px-3 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white text-sm px-3 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent