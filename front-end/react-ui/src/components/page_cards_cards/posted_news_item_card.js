import React, {Component} from 'react'
import asiadu_photo from '../../pictures/Asiedu Nketia4.jpg'
import ndc_member_pic from '../../pictures/NDCMembers.jpg'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'
import PostUpdatePosterInfor from './post_card_helpers/post_update_poster_infor'

class NewsPostCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            poster_info: {
                id: "random_number",
                picture: asiadu_photo,
                name: "Hon. Asiadu Nkatia",
                title: "Party General Secretary",
                date_posted: "october 12",
                time_posted: "11:45pm",

            }
        }
    }

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

        let post

        return(
            <div className="section_card news_post_card">
                <PostUpdatePosterInfor poster_info={this.state.poster_info}/>
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