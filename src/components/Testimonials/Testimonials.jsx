import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'
import TestimonialCard from './TestimonialCard'


const testimonialsData = [
    {
      image: user_1,
      name: "Willia Jackson",
      designation: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
      image: user_2,
      name: "Mike Tenison",
      designation: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
      image: user_3,
      name: "Hermione Potter",
      designation: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
      image: user_4,
      name: "John Wick",
      designation: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    }
  ];

const Testimonials = () => {
   
    const slider = useRef();
    let tx = 0;
    const slideforward = () => {
       if(tx>-50){
        tx -=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward = () => {
        if(tx<0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideforward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
        <div className="slider">
            <ul ref={slider}>
                {testimonialsData.map((testimonial,index)=>(
                    <li key={index}>
                        <TestimonialCard {...testimonial} />
                    </li>
                ))}
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
