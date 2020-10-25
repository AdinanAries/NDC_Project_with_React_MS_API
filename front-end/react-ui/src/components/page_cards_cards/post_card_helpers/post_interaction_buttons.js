import React, {Component} from 'react'

class PostInteractionBtns extends Component{

    constructor(props){
        super(props);
        this.state = {
            icon_one: {
                class: props.iconSettings.icon_one.class,
                text: props.iconSettings.icon_one.text
            },
            icon_two: {
                class: props.iconSettings.icon_two.class,
                text: props.iconSettings.icon_two.text
            },
            icon_three: {
                class: props.iconSettings.icon_three.class,
                text: props.iconSettings.icon_three.text
            },
            
        }
    }

    render(){
        return(
            <div className="post_interaction_buttons">
                <div>
                    <strong><i className={this.state.icon_one.class} aria-hidden="true"></i>
                    <span>{this.state.icon_one.text}</span></strong>
                </div>
                <div style={{marginLeft: 30}}>
                    <strong><i className={this.state.icon_two.class} aria-hidden="true"></i>
                    <span>{this.state.icon_two.text}</span></strong>
                </div>
                <div style={{marginLeft: 30}}>
                    <strong><i className={this.state.icon_three.class} aria-hidden="true"></i>
                    <span>{this.state.icon_three.text}</span></strong>
                </div>
            </div>
        )
    }
} 

export default PostInteractionBtns