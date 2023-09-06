import React from 'react'

import './card.css'

//type of the trail
interface props{
  photo: string;
  name: string;
  rating: number;
  difficulty: string;

}



//helper function for the render function
const renderStars = (count: number) => {
 
  const starSVG = (key: number) => (
    <svg key= {key} width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" />
      </svg>

  )
  return Array.from({length: count}, (_, index) => starSVG(index));
}

//Specs: take a trail object, and rendors svg elements based on the rating (i.e. is rating == 4, returns 4 svg stars element )
const render:React.FC<props> = ({photo, name, rating, difficulty}:props) => {
  return (
    <div>
      {renderStars(rating)}
    </div>

  );
}


//Specs: main components, takes a trail object and display the card components and demonstrates the key information 
const Card:React.FC<props> = ({photo, name, rating, difficulty}:props) => {
  
  return(
    <div className='card container'>
      <img className="photo" src={photo} alt="Landscape" />
      <div className="top_left">
        <span className='difficulty'>{difficulty}</span>
      </div>
      <div className="bottom_left">
      render({rating})
      
      <span className='name'>{name}</span>
      </div>
    </div>
  )
}

// // testing component
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
