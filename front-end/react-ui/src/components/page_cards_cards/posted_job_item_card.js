import React, {Component} from 'react'
import muntaka_photo from '../../pictures/Muntaka.jpg'
import clert_hiring_photo from '../../pictures/office_clerk_hiring.jpg'
import PostUpdatePosterInfor from './post_card_helpers/post_update_poster_infor'
import PostInteractionBtns from './post_card_helpers/post_interaction_buttons'

class JobPostCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            poster_info: {
                id: "random_number",
                picture: muntaka_photo,
                name: "Hon. Muntaka Mubarak",
                title: "MP Asawase Constituency",
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
            <div className="section_card job_post_card">
                <PostUpdatePosterInfor poster_info={this.state.poster_info}/>
                <div className="project_post_details">
                    <h1 style={{margin: "10px 0", color:"rgb(170, 106, 76)"}}>Office Clerk Vacancy 
                        <br />
                        <span style={{fontSize: 11, color:"rgb(63, 115, 150)"}}>hiring - you earn:  
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-trophy" aria-hidden="true"></i> 
                            +100 <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span>
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-line-chart" aria-hidden="true"></i> 
                            +15% <span style={{margin: "0 4px", fontSize: 11, color: "#666666", paddingTop: -5}}>|</span>
                            <i style={{fontSize: 11, marginRight: 0, marginLeft: 3, color:"rgb(170, 106, 76)"}} className="fa fa-anchor" aria-hidden="true"></i> 
                            +20%
                        </span>
                    </h1>
                    <p style={{marginBottom: 5}}><i style={{marginRight: 10}} className="fa fa-building" aria-hidden="true"></i> Ema's Research Facility LLC</p>
                    <p style={{marginBottom: 5}}><i style={{marginRight: 10, fontSize: 14}} class="fa fa-clock-o" aria-hidden="true"></i> Fulltime</p>
                    <p style={{marginBottom: 15}}><i style={{marginRight: 10}} className="fa fa-money" aria-hidden="true"></i> $1,200/Month</p>
                    <div>
                        <p style={{color: "#355172", fontWeight: "bolder", margin: "5px 0"}}>Academic Requirements</p>
                        <p><i style={{marginRight: 10}} className="fa fa-graduation-cap" aria-hidden="true"></i>High School Diploma</p>
                        <p style={{fontWeight: "bolder", color: "#355172", marginBottom: 5, marginTop: 15}}>Points Required</p>
                        <div style={{display: "flex", justifyContent: "space-between", width: 200, marginBottom: 15}}>
                            <p><i style={{marginRight: 10}} className='fa fa-trophy' aria-hidden="true"></i>Star</p>
                            <p><i style={{marginRight: 10}} className="fa fa-line-chart" aria-hidden="true"></i>50%</p>
                            <p><i style={{marginRight: 10}} className="fa fa-anchor" aria-hidden="true"></i>70%</p>
                        </div>
                    </div>
                    <p style={{marginBottom: 10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita fugit nemo hic. Sequi, nihil. Quidem quos, ducimus rerum iure tempora</p>
                </div>
                <img style={{width: "100%", height: "auto"}} src={clert_hiring_photo} alt="" />
                <PostInteractionBtns iconSettings={postInteractionsIcons}/>
            </div>
        )
    }

}

export default JobPostCard