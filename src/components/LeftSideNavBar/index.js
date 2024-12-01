import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const LeftSideNavBar = () => {
  return (
    <div className='main-left-side-nav-container'>
        <Link to="/">
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017629/samples/Transition-ReactJs-CSS/riskhawk-logo_1_fdot85.png' alt='logo' className='logo-image'/>
        </Link>
        <div className='side-nav-titles-container with-arrow'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/file-search-02_cabtqg.png' alt='Internal Audit' className='navbar-images'/>
            <p className='side-title'>Internal Audit</p>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733028523/samples/Transition-ReactJs-CSS/direction-up_2_kxp43n.png' alt='arrow'/>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/file-check-02_ynfrvi.png' alt='UAT Testing' className='navbar-images'/>
            <p className='side-title'>UAT Testing</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017629/samples/Transition-ReactJs-CSS/link-03_crx77w.png' alt='Intract' className='navbar-images'/>
            <p className='side-title'>Intract</p>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733028523/samples/Transition-ReactJs-CSS/direction-up_2_kxp43n.png' alt='arrow'/>
        </div>
        <Link to="/queue" className='link-item'>
            <div className='side-nav-titles-container'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/users_powxqn.png' alt='Queue' className='navbar-images'/>
                <p className='side-title'>Queue</p>
            </div>
        </Link>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/sitemap_m3okaw.png' alt='workflow' className='navbar-images'/>
            <p className='side-title'>Workflow</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/user_frso8d.png' alt='Admin' className='navbar-images'/>
            <p className='side-title'>Admin</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/box_wfrgmo.png' alt='Asset' className='navbar-images'/>
            <p className='side-title'>Asset</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/users_1_bklskm.png' alt='Parent' className='navbar-images'/>
            <p className='side-title'>Parent</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/circle-off_jbybal.png' alt='Option One' className='navbar-images'/>
            <p className='side-title'>Option One</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/circle-off_1_ysqxp1.png' alt='Option Two' className='navbar-images'/>
            <p className='side-title'>Option Two</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017628/samples/Transition-ReactJs-CSS/wrench_a5oc44.png' alt='All Accessories' className='navbar-images'/>
            <p className='side-title'>All Accessories</p>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/star-06_wxndxx.png' alt='Decorating' className='navbar-images'/>
            <p className='side-title'>Decorating</p>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733028523/samples/Transition-ReactJs-CSS/direction-up_2_kxp43n.png' alt='arrow'/>
        </div>
        <div className='side-nav-titles-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733017627/samples/Transition-ReactJs-CSS/gift_yvrvos.png' alt='Presenting' className='navbar-images'/>
            <p className='side-title'>Presenting</p>
        </div>
    </div>
  )
}

export default LeftSideNavBar