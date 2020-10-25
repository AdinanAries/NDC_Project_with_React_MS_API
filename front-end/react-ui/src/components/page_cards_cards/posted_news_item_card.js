import React, {Component} from 'react'
import asiadu_photo from '../../pictures/Asiedu Nketia4.jpg'
import ndc_member_pic from '../../pictures/NDCMembers.jpg'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'
import PostUpdatePosterInfor from './post_card_helpers/post_update_poster_infor'
import PostInteractionsCounter from './post_card_helpers/post_interactions_count'

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
                poster_type: "individual"
            },
            post_interaction_count: {
                likes: 721,
                shares: 23,
                comments: 49
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

        return(
            <div className="section_card news_post_card">
                <PostUpdatePosterInfor poster_info={this.state.poster_info}/>
                <div className="news_post_content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem delectus mollitia animi labore ducimus aut consectetur beatae 
                        voluptatum in nulla cupiditate vitae
                    </p>
                    <img src={ndc_member_pic} alt="" />
                    <PostInteractionsCounter interactionsCount={this.state.post_interaction_count}/>
                    <div style={{borderTop: "1px solid #d1d1d1", marginTop: 10}}>
                        <PostInteractionBtns iconSettings={postInteractionsIcons}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsPostCard