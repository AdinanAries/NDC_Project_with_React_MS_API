import React, {Component} from 'react'

class PostUpdatePosterInfor extends Component{
    constructor(props){
        super(props)
        this.state = {
            poster_info: {
                id: props.poster_info.id,
                profile_photo: props.poster_info.picture,
                name: props.poster_info.name,
                title: props.poster_info.title,
                date_posted: props.poster_info.date_posted,
                time_posted: props.poster_info.time_posted
            }
        }
    }

    render(){
        return(
            <div className="poster_details">
                <div className="poster_profile_pic">
                    <img src={this.state.poster_info.profile_photo} alt="" />
                </div>
                <div className="poster_name_details_icon">
                    <div className="poster_name_detials">
                    <h1>{this.state.poster_info.name}</h1>
                    <p>{this.state.poster_info.title}</p>
                        <div>
                            <div style={{display: "flex", marginTop: 4}}>
                                <p>{this.state.poster_info.date_posted}</p>
                                <i className="fa fa-circle time_date_visibility_separator" aria-hidden="true"></i>
                                <p>{this.state.poster_info.time_posted}</p>
                                    <i  className="fa fa-circle time_date_visibility_separator" aria-hidden="true"></i>
                                    <i style={{marginTop: -2}} className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
            </div>
        )
    
    }
}

export default PostUpdatePosterInfor