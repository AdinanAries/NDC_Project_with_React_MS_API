import React, {Component} from 'react'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'
import PostUpdatePosterInfor from './post_card_helpers/post_update_poster_infor'
import ndc_flag from "../../pictures/ndcc.jpg"
import ras_photo from "../../pictures/Ras-Mubarak.jpg"
import asiadu_photo from "../../pictures/Asiedu Nketia4.jpg"
import meeting_main_photo from '../../pictures/ndcevnt2.jpg'

class MeetingPostCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            poster_info: {
                id: "random_number",
                picture: ndc_flag,
                name: "Brooklyn for NDC",
                title: "Brooklyn NY, USA",
                date_posted: "october 12",
                time_posted: "11:45pm",
                poster_type: "chapter"
            }
        }
    }

    render(){

        let postInteractionsIcons = {
            icon_one: {
                class: "fa fa-calendar-plus-o",
                text: "Attend"
            },
            icon_two: {
                class: "fa fa-commenting-o",
                text: "Comment"
            },
            icon_three: {
                class: "fa fa-share-square-o",
                text: "Share"
            }
        }

        return(
            <div class="section_card meeting_post_card">
                <PostUpdatePosterInfor poster_info={this.state.poster_info}/>
                <div className="meeting_post_details">
                    <h1>Discussing the current covid Issue 
                        <br />
                        <span style={{fontSize: 11, color:"rgb(63, 115, 150)"}}>Meeting - you earn: 
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-trophy" aria-hidden="true"></i> 
                            +4 <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span>
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-line-chart" aria-hidden="true"></i> 
                            +5% <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span>
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-anchor" aria-hidden="true"></i> 
                            +7%
                        </span>
                    </h1>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>
                        1234 Koskiosko st, Brookly NY, USA 1486 
                    </p>
                    <p>
                        <i className="fa fa-video-camera" aria-hidden="true"></i>Virtual
                    </p>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i>March, 23 - 12:32 PM</p>
                    <p><i className="fa fa-users" aria-hidden="true"></i>57</p>
                    <div className="meeting_guest_list_details">
                        <h1>Meeting Guests</h1>
                        <div className="meeting_guest">
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: 10}}>
                                    <div className="meeting_guest_profile_photo">
                                        <img src={asiadu_photo} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <h1 style={{color: "#355172"}}>Hon. Asiadu NKatia</h1>
                                    <p>Party General Secretary</p>
                                    <p>Party Unicorn 34,583</p>
                                </div>
                            </div>
                            <div className="meeting_guest_icons">
                                <div className="see_meeting_guest_profile_btn">see profile</div>
                            </div>
                        </div>
                        <div className="meeting_guest">
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: 10}}>
                                    <div className="meeting_guest_profile_photo">
                                        <img src={ras_photo} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <h1 style={{color: "#355172"}}>Hon. Ras. Mubarak</h1>
                                    <p>MP for Kunbungu Constituency</p>
                                    <p>Party Unicorn 23,583</p>
                                </div>
                            </div>
                            <div className="meeting_guest_icons">
                                <div className="see_meeting_guest_profile_btn">see profile</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{margin: "0 10px", marginBottom: 15, color: "#424242", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita fugit nemo hic. Sequi, nihil. Quidem quos, ducimus rerum iure tempora</p>
                <img style={{width: "100%", height: "auto"}} src={meeting_main_photo} alt="" />
                <PostInteractionBtns iconSettings={postInteractionsIcons}/>
            </div>
        )
    }
} 

export default MeetingPostCard