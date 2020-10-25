import React, {Component} from 'react'
import jm_photo from '../../pictures/JM.jpg'
import adome_bridge_photo from '../../pictures/bridge_construction.jpg'
import PostUpdatePosterInfor from './post_card_helpers/post_update_poster_infor'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'

class ProjectPostCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            poster_info: {
                id: "random_number",
                picture: jm_photo,
                name: "John Dramani Mahama",
                title: "Party Flag Bearer",
                date_posted: "october 12",
                time_posted: "11:45pm",
                poster_type: "individual"
            }
        }
    }

    render(){

        let postInteractionsIcons = {
            icon_one: {
                class: "fa fa-hand-rock-o",
                text: "Apply"
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

        return (
            <div className="section_card project_post_card">
                <PostUpdatePosterInfor poster_info={this.state.poster_info}/>
                <div className="project_post_details">
                    <h1 style={{margin: "10px 0", color:"rgb(170, 106, 76)"}}>Adome Bridge Construction 
                        <br />
                        <span style={{fontSize: 11, color:"rgb(63, 115, 150)"}}>Project - you earn:  
                            <i style={{marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-trophy" aria-hidden="true"></i> 
                            +1000 <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span> 
                            <i style={{marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-line-chart" aria-hidden="true"></i> 
                            +20% <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span>
                            <i style={{marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-anchor" aria-hidden="true"></i> 
                            +35%
                        </span>
                    </h1>
                    <p style={{marginBottom: 5}}><i style={{marginRight: 10}} className="fa fa-folder" aria-hidden="true"></i> Building Construction</p>
                    <p style={{marginBottom: 5}}><i style={{marginRight: 10}} className="fa fa-calendar" aria-hidden="true"></i> 6 Months</p>
                    <p style={{marginBottom: 15}}><i style={{marginRight: 10}} className="fa fa-money" aria-hidden="true"></i> $2,000/Month</p>
                    <div>
                        <p style={{color: "#355172", fontWeight: "bolder", margin: "5px 0"}}>Academic Requirements</p>
                        <p><i style={{marginRight: 10}} className="fa fa-graduation-cap" aria-hidden="true"></i>Masters Graduate</p>
                        <p style={{fontWeight: "bolder", color: "#355172", marginBottom: 5, marginTop: 15}}>Points Required</p>
                        <div style={{display: "flex", justifyContent: "space-between", width: 200, marginBottom: 15}}>              
                            <p><i style={{marginRight: 10}} className='fa fa-trophy' aria-hidden="true"></i>Unicorn</p>
                            <p><i style={{marginRight: 10}} className="fa fa-line-chart" aria-hidden="true"></i>88%</p>
                            <p><i style={{marginRight: 10}} className="fa fa-anchor" aria-hidden="true"></i>95%</p>
                        </div>
                    </div>
                    <p style={{marginBottom: 10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita fugit nemo hic. Sequi, nihil. Quidem quos, ducimus rerum iure tempora</p>
                </div>
                <img style={{width: "100%", height: "auto"}} src={adome_bridge_photo} alt="" />
                <PostInteractionBtns iconSettings={postInteractionsIcons}/>
            </div>
        )
    }
}

export default ProjectPostCard