import React, {Component} from 'react'
import asiadu_photo from '../../pictures/Asiedu Nketia4.jpg'
import ndc_member_pic from '../../pictures/NDCMembers.jpg'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'

class NewsPostCard extends Component{
    render(){

        let postInteractionsIcons = {
            icon_one: {
                class: "fa fa-thumbs-o-up",
                text: "Like"
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
            <div className="section_card news_post_card">
                <div className="poster_details">
                    <div className="poster_profile_pic">
                        <img src={asiadu_photo} alt="" />
                    </div>
                    <div className="poster_name_details_icon">
                        <div className="poster_name_detials">
                            <h1>Hon. Asiadu Nkatia</h1>
                            <p>Party General Secretary</p>
                            <div>
                                <div style={{display: "flex", marginTop: 4}}>
                                    <p>october 12</p>
                                    <i className="fa fa-circle time_date_visibility_separator" aria-hidden="true"></i>
                                        <p>11:45pm</p>
                                        <i  className="fa fa-circle time_date_visibility_separator" aria-hidden="true"></i>
                                        <i style={{marginTop: -2}} className="fa fa-globe" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="news_post_content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem delectus mollitia animi labore ducimus aut consectetur beatae 
                        voluptatum in nulla cupiditate vitae
                    </p>
                    <img src={ndc_member_pic} alt="" />
                    <div className="current_interactions_count">
                        <div>
                            <i style={{color:"rgb(84, 130, 168)"}} className="fa fa-thumbs-up" aria-hidden="true"></i>
                            <span>721</span>
                        </div>
                        <div>
                            <i style={{color:"rgb(84, 168, 154)"}} className="fa fa-commenting" aria-hidden="true"></i>
                            <span>49</span>
                        </div>
                        <div>
                            <i style={{color:"rgb(132, 76, 170)"}} className="fa fa-share" aria-hidden="true"></i>
                            <span>23</span>
                        </div>
                    </div>
                    <PostInteractionBtns iconSettings={postInteractionsIcons}/>
                </div>
            </div>
        )
    }
}

export default NewsPostCard