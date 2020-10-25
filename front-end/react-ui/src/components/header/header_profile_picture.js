import React, {Component} from 'react'
import ras_photo from '../../pictures/Ras-Mubarak.jpg'

class ProfilePhoto extends Component{
    render(){
        return(
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div className="header_profile_picture">
                    <img src={ras_photo} alt=""/>
                </div>
            </div>
        )
    }
}

export default ProfilePhoto