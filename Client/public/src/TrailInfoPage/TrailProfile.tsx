import React from 'react'
import trailimg from '../images/trail_photo.jpg'

const TrailProfile = () => {
  return (
    <div className='profile container'>
    <h1 className='title'>St Mark's Summit</h1>
    <img className='photo' src={trailimg} alt="" />
    <div className='key_info_row'>
        <div className='rate'>

        </div>
        <div className="elevation_gain"></div>
        <div className="length"></div>
        <div className="difficulty"></div>
        <div className="seasons"></div>  
    </div>

    <p className="brief_introduction">

    </p>
</div>
  )
}

export default TrailProfile




