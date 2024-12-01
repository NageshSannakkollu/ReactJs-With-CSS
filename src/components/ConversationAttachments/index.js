import React from 'react'
import {Chrono} from 'react-chrono'

import "./index.css"

const ConversationAttachments = () => {
  return (
    <div className='conversation-attachments-main-container'>
        <div className='conversation-escalate-container'>
            <button className='conversation-button'>Conversation</button>
            <button className='conversation-button escalate'>Escalate</button>
        </div>
        <div>
            <div className='conversation-attachment-container'>
                <button className='conversation-attach-button'>
                    Conversation
                </button>
                 <button className='conversation-attach-button'>
                    Attachment
                </button>
            </div>
            
            <Chrono mode="VERTICAL" className="chrono-container">
                    <div className='conversation-chrono-container'>
                        <h3 className='user-initials' >CB</h3>
                        <div>
                        <div className="username-receiving-time-container">
                            <h4>username</h4>
                            <p>time received by whatsapp</p>
                            </div>
                            <p className='lorem-ipsum-description'>
                                Lorem ipsum dolor sit amet consectetur. 
                                Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
                                Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu 
                                volutpat arcu.
                            </p>
                        </div>
                    </div>
                    <div className='conversation-chrono-container'>
                        <h3 className='user-initials'>CB</h3>
                        <div>
                        <div className="username-receiving-time-container">
                            <h4>username</h4>
                            <p>time received by whatsapp</p>
                            </div>
                            <p className='lorem-ipsum-description'>
                                Lorem ipsum dolor sit amet consectetur. 
                                Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
                                Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu 
                                volutpat arcu.
                            </p>
                        </div>
                    </div>
                </Chrono>
                <hr/>
                <div className='social-media-input-message-container'>
                <div className='social-media-checkbox-containers'>
                <div className='social-media-items'>
                    <input type='checkbox' id="sms"/>
                    <label htmlFor='sms'>SMS</label>
                </div>
                <div className='social-media-items'>
                    <input type='checkbox' id="whatsapp"/>
                    <label htmlFor='whatsapp'>Whatsapp</label>
                </div>
                <div className='social-media-items'>
                    <input type='checkbox' id="email"/>
                    <label htmlFor='email'>Email</label>
                </div>
                </div>
                <div className='input-message-send-button-container'>
                    <input type='text' placeholder='Type a message...' className='type-message-input'/>
                    <button className='attach-button'>
                        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733050542/tree_welvyo.png' alt='attach' className='attach-icon'/>
                    </button>
                    <button className='send-icon-button-container'>
                        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733050542/sent-fast_cseu5f.png' alt='send' className='attach-icon'/>
                        <p>Send</p>
                    </button>
                </div>
                </div>
        </div>
    </div>
  )
}

export default ConversationAttachments