import React, {Component} from 'react'

class DonationComponent extends Component{
    render(){
        return (
            <div className="section_card make_donations_div">
                <h1>Donate to Earn Points</h1>
                <p style={{textAlign: "center"}}>earn points by making donations</p>
                <div>
                    <div className="donations_points_calc_num">
                    <p style={{textAlign: "center"}}>
                            <i style={{fontSize: 18, color:"rgb(170, 106, 76)"}} className="fa fa-trophy" aria-hidden="true"></i> 
                                    <span style={{fontSize: 12, fontWeight: "bolder"}}>
                                        +10 <span style={{margin: "0 6px", fontSize: 12, color: "#666666", paddingTop: -5}}>---</span>
                                        <i style={{fontSize: 16, marginRight: 0, color:"rgb(170, 106, 76)"}} className="fa fa-line-chart" aria-hidden="true"></i> 
                                        +0.2% <span style={{margin: "0 6px", fontSize: 12, color: "#666666", paddingTop: -5}}>---</span>
                                        <i style={{fontSize: 16, marginRight: 0, color:"rgb(170, 106, 76)"}} className="fa fa-anchor" aria-hidden="true"></i> 
                                        +1%
                                    </span>
                                </p>
                            </div>
                            <div className="donations_points_dollar_form">
                                <p style={{marginBottom: 10, textAlign: "center"}}>Enter dollar amount below</p>
                                <div className="pay_donation_input_btn_area">
                                    <p style={{padding: 10}}>$ <input type="text" value="1" placeholder="enter dollar amout"/></p>
                                    <div className="pay_donation_btn">Pay</div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default DonationComponent