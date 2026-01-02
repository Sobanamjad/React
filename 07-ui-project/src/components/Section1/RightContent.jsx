import React, { useEffect, useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {

  // Scroller ha ref={scrollRef} pass krana hota ha div ma 
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let scrollAmount = 0;

    const scroll = setInterval(() => {
      scrollAmount += 1;
      el.scrollLeft = scrollAmount;

      if (scrollAmount >= el.scrollWidth - el.clientWidth) {
        scrollAmount = 0;
      }
    }, 30);

    return () => clearInterval(scroll);
  }, []);

  
  return (
    <div id='right' ref={scrollRef}
     className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function(elem,idx){

        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent