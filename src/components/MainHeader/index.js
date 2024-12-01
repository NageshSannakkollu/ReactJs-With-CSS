import React from 'react'
import "./index.css"
const MainHeader = () => {
  return (
    <div className='main-home-header-container'>
            <p className='chat-feed-title'>Chat/Feed Chat</p>
          <nav className='nav-main-header-elements-container'>
            <div className='admin-container'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/home_e2grex.png' alt='home' className='home-image'/>
                <p className='process-hod'>Process Owner HOD</p>
            </div>
            <div className='admin-container'>
                <button className='admin-button'>Admin</button>
                <p className='palak-bansal'>Palak Bansal</p>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733033107/Ellipse_3855_2x_nweldu.png' alt='profile' className='profile-image'/>
            </div>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/cog_ogvg81.png' alt='settings' className='settings-image'/>
            <div className='admin-container'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/sign-out_sgicac.png' alt='logout' className='logout-image'/>
                <button className='logout-button'>Logout</button>
            </div>
            </nav>
        </div>
  )
}

export default MainHeader