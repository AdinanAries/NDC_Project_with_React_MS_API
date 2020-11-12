import React, {Component} from 'react'

class PostNewItemCard extends Component{
    constructor(props){
        super();
        this.openMainPostCard = this.openMainPostCard.bind(this);
    }

    openMainPostCard(){
        document.getElementById("main_popup_page_cover").style.display = "block";
        document.getElementById("main_create_post_inputs_card").style.display = "flex";
        
    }

    render(){
        return (
            <div className="section_card post_section_card">
                <div onClick={()=>this.openMainPostCard()} className="post_section_main_field">
                    <strong><p><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Post an item</p></strong>
                </div>
                <div className="post_card_sub_icons">
                <div className="post_section_sub_icon">
                    <p>
                        <i style={{fontWeight: "initial", color: "rgb(84, 168, 154)"}} className="fa fa-users" aria-hidden="true"></i>
                            meeting
                    </p>
                </div>
                <div className="post_section_sub_icon">
                    <p>
                        <i style={{color:"rgb(84, 130, 168)"}} className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        Event
                    </p>
                </div>
                <div className="post_section_sub_icon">
                    <p>
                        <i style={{color: "rgb(170, 106, 76)"}} className="fa fa-folder" aria-hidden="true"></i>
                        Project
                    </p>
                </div>
                <div className="post_section_sub_icon">
                    <p>
                        <i style={{color:"rgb(132, 76, 170)"}} className="fa fa-newspaper-o" aria-hidden="true"></i>
                        News
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default PostNewItemCard