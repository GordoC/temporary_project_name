import React from 'react'
import trailphoto from '../cards/assets/trail_photo.jpg';
import './card.css'

const example_trail = {
    photo: trailphoto,
    name: "Lion's bay",
    rating: 4,
    difficulty: "medium",
  };


//Specs: take a trail object, and return a svg stars elements based on the rating (i.e. is rating == 4, returns 4 svg stars element )
// const renderSwitch = (props) => {
//   return (switch(props) {
//     case 1:
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//     break;
//     case 2:
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//     break;
//     case 3:
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//     case 4:
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//     case 5:
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>   
//     })
// }


//Specs: main components, takes a trail object and display the card components and demonstrates the key information 
const Card = ({photo:String, name, rating, difficulty}) => {
  
  return(
    <div className='card container'>
      <img className="photo" src={photo} alt="Landscape" />
      <div className="top_left">
        <span className='difficulty'>{difficulty}</span>
      </div>
      <div className="bottom_left">
      rendorSwith({rating})
      
      <span className='name'>{name}</span>
      </div>
    </div>
  )
}

// testing component
// const Card = () => {
//   return(
//     <div className='card container'>
//       <img className="photo" src={trailphoto} alt="Landscape" />
//       <div className="top_left">
//         <span className='difficulty'>Hard</span>
//       </div>
//       <div className="bottom_left">
        
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
//       <span className='name'>Lion's bay</span>
//       </div>
//     </div>
//   )
// }




export default Card
