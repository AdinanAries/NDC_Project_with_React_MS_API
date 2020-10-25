import React, {Component} from 'react'

class PostNewItemCard extends Component{
    render(){
        return (
            <div className="section_card post_section_card">
                <div className="post_section_main_field">
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
                        <i style={{color: "rgb(170, 106, 76)"}} className="fa fa-folder-o" aria-hidden="true"></i>
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