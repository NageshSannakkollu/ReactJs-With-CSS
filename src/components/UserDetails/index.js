import React from 'react'
import UserAddressAdding from "../UserAddressAdding"
import ConversationAttachments from "../ConversationAttachments"
import ActionLauncherFavorite from "../ActionLauncherFavorite"

const UserDetails = () => (
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
)

export default UserDetails