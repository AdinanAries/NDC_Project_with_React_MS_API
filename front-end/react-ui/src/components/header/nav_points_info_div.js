import React, {Component} from 'react'

class PointsInfo extends Component{
    render(){
        return (
            <div style={{position: "relative"}}>
                <div style={{position: "relative"}}>
                    <div className="top_nav_activity_counter" >23k</div>
                    <p><i style={{color: "goldenrod"}} className="fa fa-trophy" aria-hidden="true"></i></p>
                </div>
                <p style={{color: "goldenrod"}}>Unicorn</p>
                <div className="top_nav_points_info_div">
                    <p>Your rank: <span>Party Unicorn</span></p>
                    <p>Your points: <span>23,424</span></p>
                    <p>Your competency: <span>88%</span></p>
                    <p>Party trust level: <span>95%</span></p>
                </div>
            </div>
        )
    }
}

export default PointsInfo