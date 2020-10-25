import React, {Component} from 'react'

class PostInteractionsCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            interactions: {
                likes: props.interactionsCount.likes,
                shares: props.interactionsCount.shares,
                comments: props.interactionsCount.comments
            }
        }
    }
    render(){
        return(
            <div className="current_interactions_count">
                <div>
                    <i style={{color:"rgb(84, 130, 168)"}} className="fa fa-thumbs-up" aria-hidden="true"></i>
                    <span>{this.state.interactions.likes}</span>
                </div>
                <div>
                    <i style={{color:"rgb(84, 168, 154)"}} className="fa fa-commenting" aria-hidden="true"></i>
                    <span>{this.state.interactions.comments}</span>
                </div>
                <div>
                    <i style={{color:"rgb(132, 76, 170)"}} className="fa fa-share" aria-hidden="true"></i>
                    <span>{this.state.interactions.shares}</span>
                </div>
            </div>
        )
    }
}

export default PostInteractionsCounter