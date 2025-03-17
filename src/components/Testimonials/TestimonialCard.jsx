import React from 'react'


const TestimonialCard = ({image,name,designation,text}) => {
  return (
    
       <div className="slide">
           <div className="user-info">
               <img src={image} alt="" />
               <div>
                   <h3>{name}</h3>
                   <span>{designation}</span>
               </div>
           </div>
           <p>
              {text}
           </p>
        </div>
    
  )
}

export default TestimonialCard
