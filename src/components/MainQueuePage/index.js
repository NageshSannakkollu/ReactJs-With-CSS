import {Component} from 'react'
import UserAddressAdding from "../UserAddressAdding"
import ConversationAttachments from "../ConversationAttachments"
import ActionLauncherFavorite from "../ActionLauncherFavorite"
import LeftSideNavBar from '../LeftSideNavBar'
import MainHeader from '../MainHeader'

import "./index.css"

class MainQueuePage extends Component{
    state = {showUserDetails:false}

    showUserDetailsHandler = () => {
        this.setState({showUserDetails:true})
    }

    render(){
        const {showUserDetails} = this.state
    return (
    <div className='left-nav-bar-main-queue-container'>
    <LeftSideNavBar/>
    <div className='home-header-container'>
        <MainHeader/>
        <div className='user-main-frame-container'>
            <div className='user-frames'>
                <p className='name-profile'>CB</p>
                <p className='frame-user-name'>name</p>
                <p>0</p>
            </div>
            <div className='user-frames'>
                <p className='name-profile'>CB</p>
                <p className='frame-user-name'>name</p>
                <p>0</p>
            </div>
            <div className='user-frames'>
                <p className='name-profile'>CB</p>
                <p className='frame-user-name'>name</p>
                <p>0</p>
            </div>
            
            <div className='user-frames user-hannibal' onClick={this.showUserDetailsHandler}>
                <p className='name-profile'>CB</p>
                <p className='frame-user-name'>Hannibal</p>
                <p className='length'>2</p>
            </div>
            
            <div className='user-frames'>
                <p className='name-profile'>CB</p>
                <p className='frame-user-name'>name</p>
                <p>0</p>
            </div>
            <div className='user-frames blue-messaging'>
                <p className='name-profile blue-messaging'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/comments_i7z0at.png' alt='message' className='message-image'/>
                </p>
                <p className='frame-user-name'>Messaging</p>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733028523/samples/Transition-ReactJs-CSS/direction-up_2_kxp43n.png' alt='right arrow' className='arrow-image'/>
            </div>
        </div>
        {showUserDetails ? 
        <div className='user-details-main-frame-containers'>
            <div className='user-address-adding-container'> 
               <UserAddressAdding/>
            </div>
            <div>
                <ConversationAttachments/>
            </div>
            <div>
               <ActionLauncherFavorite/>
            </div>
        </div> 
        : <div>
            <h1 className='view-user-details'>Click to View User Details</h1>
        </div>
        }
    </div>
    </div>
  )
}
}

export default MainQueuePage 