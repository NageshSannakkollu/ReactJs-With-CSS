import {Component} from 'react'
import {v4 as uuidv4} from "uuid";
import "./index.css"

const favoriteCaseList = [
    {
        id:uuidv4(),
        title:"Lorem ipsum dolor sit amet consectetur. Et tincidunt",
        imageUrl:'',
    },
    {
        id:uuidv4(),
        title:"Photo",
        imageUrl:'https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052601/image_1_iqxvj7.png',
    },
    {
        id:uuidv4(),
        title:"Lorem ipsum dolor sit amet consectetur. Et tincidunt",
        imageUrl:'',
    }

]

class ActionLauncherFavorite extends Component {
    render(){
    return (
    <div className='capture-action-favorite-main-container'>
        <div className='askcatura-container'>
            <div className='catura-greeting-container'>
            <div className='title-whatsapp-greeting-container'>
                <h4>Ask Catura</h4>
                <div className='envelope-whatsapp-container'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052710/envelope_rpxufa.png' alt='whatsapp' className="envelope" />
                    <select>
                        <option>Whatapp</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                    </select>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052600/Frame_zsccjy.png' alt='arrow down' className='blue-arrow'/>
                </div>
                <div className='envelope-whatsapp-container'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052710/envelope_rpxufa.png' alt='whatsapp' className="envelope" />
                    <select>
                        <option>Greeting</option>
                        <option>Message</option>
                        <option>Parcel</option>
                    </select>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052600/Frame_zsccjy.png' alt='arrow down' className='blue-arrow'/>
                </div>
                </div>
            </div>
            <div className='greeting-image-container'>
                Image
            </div>
            <div className='type-input-message-container'>
                <input type="text" placeholder='Type a message...' className='type-message-input capture-message'/>
                <button type="button" className='send-icon-button'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733050542/sent-fast_cseu5f.png' alt='send' className='send-icon'/>
                </button>
            </div>
        </div>
        <div className='askcatura-container'>
            <h4>Action Launcher</h4>
            <hr/>
            <div className='search-icon-search-input-container'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052710/search_vmq2sa.png' alt='search' className='search-icon'/>
                <input type='text' className='message-search-input' placeholder='Search actions...'/>
            </div>
            <div>
            <div className='add-action-fee-reversal-container'>
                <button type='button' className='add-action-button-container action-launcher-buttons'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733039287/Vector_7_zfatm2.png' alt='plus' className='add-icon'/>
                    Add Action 
                </button>
                <button className='action-launcher-buttons'>Fee Reversal</button>
                </div>
                <div className='add-action-fee-reversal-container'>
                    <button className='action-launcher-buttons'>Retail Onboarding</button>
                    <button className='action-launcher-buttons'>Address Update</button>
                </div>
            </div>
        </div>
        <div className='askcatura-container'>
            <div className='pin-case-favorite-title'>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1733052710/pin_nbcf4g.png' alt='pin' className='pin-image'/>
                <h3>Case Favorite</h3>
            </div>
            <hr/>
            <ul className='unordered-favorite-list'>
                {favoriteCaseList.map(eachOne => {
                    return(
                        <div key={eachOne.id} className='favorite-list-container'>
                            <img src={eachOne.imageUrl} alt='' className='favorite-list-button'/>
                            <p>{eachOne.title}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    </div>

  )
}
}

export default ActionLauncherFavorite