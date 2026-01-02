import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img src={props.brandlogo} alt="" />
            <button>Save <Bookmark size={12} /></button>
          </div>
          <div className="center">
          <h3>{props.company} <span>{props.post}</span></h3>
          <h2>Senior UI/UX designer</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
          </div>
          </div>
          <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <h3>{props.location}</h3>
            </div>
              <button>Apply now</button>
          </div>
      </div>
  )
}

export default Card