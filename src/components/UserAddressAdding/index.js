import {Component} from 'react'
import Popup from "reactjs-popup"

import "./index.css"

class UserAddressAdding extends Component{

    addUserHandler = event => {
        event.preventDefault()
    }
    render(){
    return (
    <div className='user-address-details-main-container'>
        <div className='name-initial-username-container'>
            <h3 className='user-profile-initials'>CB</h3>
            <div className='username-address-container'>
                <h2>Hennibal Smith</h2>
                <div className='location-address-container'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/map-marker_i29dwz.png' alt='location' className='location-image'/> 
                    <p>1 Market Street San Francisco, CA 94105</p>
                </div>
            </div>
        </div>

        {/* Customer Details */}

        <div className='customer-address-adding-details-container'>
            <div className='user-details-inside-frame'>
                <p >Customer ID</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>12345</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
             <hr/>
            <div className='user-details-inside-frame'>
                <p>Email Address</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>rachel@sample.com</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
             <hr/>
            <div className='user-details-inside-frame'>
                <p>Phone Number</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>8051298905</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
            <div>
            <Popup
                modal
                trigger = {
                    <button className='trigger-button'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='add' className='add-address'/>
                    <p>Add</p>
            </button>
                }>
                <div className='form-container'>
                    <h3 className='add-user-title'>Add User</h3>
                    <form onSubmit={this.addUserHandler}>
                        <label>Customer ID :</label>
                        <br/>
                        <input type='number' placeholder='Customer id...' className='input-form' required/>
                        <br/><br/>
                        <label>Email Address :</label>
                        <br/>
                        <input type='email' placeholder='Email...' className='input-form' required/>
                        <br/><br/>
                        <label>Phone Number :</label>
                        <br/>
                        <input type='number' placeholder='Phone numbers...' className='input-form' required/>
                        <br/><br/>
                        <button type='submit' className='add-button'>Add</button>
                    </form>
                </div>
            </Popup>
            </div>
            {/* <div className='add-more-button'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='add' className='add-address'/>
                <p>Add</p>
            </div> */}
        </div>
        
        {/* Customer Type */}

        <div className='customer-address-adding-details-container'>
            <div className='user-details-inside-frame'>
                <p >Loyalty Tier</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>Silver</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
             <hr/>
            <div className='user-details-inside-frame'>
                <p>Segment</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>Sleepy Customer</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
            <div className='add-more-button'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='add' className='add-address'/>
                <p>Add</p>
            </div>
        </div>

        {/* LIFE TIME VALUE */}

        <div className='customer-address-adding-details-container'>
            <div className='user-details-inside-frame'>
                <p >Lifetime Value</p>
                <div className='details-more-container'>
                    <p className='user-address-values'>$ 1M</p>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
             <hr/>
            <div className='user-details-inside-frame'>
                <p>Propensity to Purchase</p>
                <div className='details-more-container'>
                    <div className='graphs-container'>
                        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Group_1171287003_1_ry73zg.png' alt='circle' className=''/>
                        <p className='brown-color'>75%</p>
                    </div>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
            <div className='add-more-button'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='add' className='add-address'/>
                <p>Add</p>
            </div>
        </div>

        {/* ENGAGEMENT SCORE */}

        <div className='customer-address-adding-details-container'>
            <div className='user-details-inside-frame'>
                <p >Engagement Score</p>
                <div className='details-more-container'>
                    <div className='graphs-container'>
                        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Group_1171287003_ew9vtu.png' alt='circle graph' className='graph-image'/>
                        <p className='green-color'> 80%</p>
                    </div>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039288/Frame_1686558932_gc6ixu.png' alt='more' className='more-image'/>
                </div>
            </div>
            
            <div className='add-more-button'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='add' className='add-address'/>
                <p>Add</p>
            </div>
        </div>
        <div className='assign-other-agent-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/user-add_tjexhn.png' alt='add' className='add-address'/>
            <p>Assign other Agent </p>
        </div>
        <button className='add-new-widget-button'>
            Add New widget
        </button>
    </div>
  )
 }
}

export default UserAddressAdding