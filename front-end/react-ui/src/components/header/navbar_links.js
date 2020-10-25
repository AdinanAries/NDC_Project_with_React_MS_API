import React, {Component} from 'react'
import PointsInfo from './nav_points_info_div'

class NavbarLinks extends Component{
    render(){
        return (
            <div className="header_menu_icons">
                <ul>
                    <li className="active">
                        <div>
                            <p>
                                <i className="fa fa-home" aria-hidden="true"></i>
                            </p>
                             <p>Home</p>
                        </div>
                    </li>
                    <li>
                        <div>
                             <p>
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </p>
                            <p>Contracts</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                            </p>
                            <p>Events</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div style={{position: "relative"}}>
                                <div style={{right: 13}} className="top_nav_activity_counter" >2</div>
                                <p><i className="fa fa-bell-o" aria-hidden="true"></i></p>
                            </div>
                            <p>Notifications</p>
                        </div>
                    </li>
                    <li id="top_nav_points_section">
                        <PointsInfo />
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavbarLinks