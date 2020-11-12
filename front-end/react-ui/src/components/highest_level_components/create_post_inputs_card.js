import React, {Component} from 'react';
import rasPhoto from "../../pictures/Ras-Mubarak.jpg"

export default class CreatePostCard extends Component {
    constructor(props){
        super();
        this.ClickCounter = 0;
        this.state = {
            clickCounter: 0
        };
        this.closePostCard = this.closePostCard.bind(this);
    }

    closePostCard(div_id){
        if(div_id === "main_post_news_card_inputs"){
            this.ClickCounter++;
        }
        this.ClickCounter++;
        
        if(this.ClickCounter < 2){
            document.getElementById("main_popup_page_cover").style.display = "none";
            document.getElementById("main_create_post_inputs_card").style.display = "none";
            this.ClickCounter = 0;
        }
        //first time calls with can only get it up to 2 not greater than two
        //second time calls will make it 3, then now it will be reset to 0
        if(this.ClickCounter > 2){
            this.ClickCounter = 0;
        }
        
    }
    render(){
        return (
            <div onClick={()=> this.closePostCard("main_create_post_inputs_card")} id="main_create_post_inputs_card" className="create_post_inputs_card">
                <div onClick={()=> this.closePostCard("main_post_news_card_inputs")} id="main_post_news_card_inputs" className="post_news_card_inputs">
                    <div className="post_news_card_inputs_title">
                        <div className="create_post_p_div_at_create_post_popup">
                            <p>Post an item</p>
                        </div>
                        <div className="popup_close_button"><p><i class="fa fa-times" aria-hidden="true"></i></p></div>
                    </div>
                    <div className="post_news_card_inputs_header_and_textarea">
                        <div className="post_news_card_inputs_header">
                            <div className="post_news_card_profile_pic">
                                <img src={rasPhoto} alt=""></img>
                            </div>
                            <div className="post_news_card_inputs_select_poster_div">
                                <p>
                                    <i style={{marginRight: "10px"}} className="fa fa-user"></i> 
                                    Ras. Mubarak 
                                    <i style={{marginLeft: "10px"}} className="fa fa-caret-down"></i>
                                </p>
                            </div>
                            <div className="post_news_card_inputs_visibility_div">
                                <p>
                                    <i style={{marginRight: "10px"}} className="fa fa-globe"></i> 
                                    Anyone 
                                    <i style={{marginLeft: "10px"}} className="fa fa-caret-down"></i>
                                </p>
                            </div>
                        </div>
                        <div className="post_news_card_inputs_text_area_div">
                            <textarea placeholder="What do you have for the patriots today?"/>
                        </div>
                    </div>
                    <div className="icons_and_post_btn_area">
                        <div className="icons_and_post_btn_area_icons">
                            <div>
                                <i className="fa fa-picture-o"></i>
                            </div>
                            <div>
                                <i className="fa fa-youtube-play"></i>
                            </div>
                            <div>
                                <i className="fa fa-file-text"></i>
                            </div>
                        </div>
                        <div className="icons_and_post_btn_area_button">Post</div>
                    </div>
                </div>
            </div>
        )
    }
}