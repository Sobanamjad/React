import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-3 h-[82vh] flex items-center gap-10 justify-between px-18'>
        <LeftContent />
        <RightContent users={props.users} />
        
    </div>
  )
}

export default Page1Content