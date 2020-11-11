import React, {Component} from 'react'
import ras_photo from '../../pictures/Ras-Mubarak.jpg'
import MembersStats from "../page_cards_cards/members_stats"

class LeftComponent extends Component{
    render(){
        return (
            <section className="left_section">
                <div className="left_profile_section section_card">
                    <div className="left_profile_details">
                        <div className="left_profile_cover"></div>
                        <div className="left_profile_details_photo">
                            <img src={ras_photo} alt="" />
                        </div>
                        <div className="left_profile_name_and_user_details">
                            <h1>Hon. Ras. Mubarak</h1>
                            <p style={{textAlign: "center", marginBottom: 10, color: "rgb(63, 115, 150)", fontWeight: "bolder"}}>
                                Party Unicorn
                            </p>
                            <p style={{textAlign: "center"}}>
                                <i className='fa fa-trophy' aria-hidden="true"></i><span>23,424</span>
                                <i className="fa fa-line-chart" aria-hidden="true"></i><span>88%</span>
                                <i className="fa fa-anchor" aria-hidden="true"></i><span>95%</span>
                            </p>
                        </div>
                        <div className="left_profile_siggested_chapter">
                            <p style={{textAlign: "center", color: "darkblue", fontWeight: "bolder", marginBottom: 10}}>
                                Chapters near you
                            </p>
                            <div className="each_suggested_chapter">
                                <div class="each_suggested_chapter_details">
                                    <h1>Bronx worriors</h1>
                                    <p>Bronx, NY, USA - <i class="fa fa-users" aria-hidden="true"></i> 2304</p>
                                    <p class="suggested_chapter_apply_btn">Apply For Membership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MembersStats />
            </section>
        )
    }
}

export default LeftComponent