import React, {Component} from 'react';

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

                </div>
            </div>
        )
    }
}