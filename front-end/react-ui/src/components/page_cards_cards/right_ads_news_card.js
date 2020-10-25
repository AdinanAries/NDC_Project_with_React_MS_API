import React from 'react'
import AdsItem from '../body/data_item_templates/right_side_news_item'

class AdsNewsCard extends React.Component{
    render(){
        return(
            <div className="section_card ads_section_card">
                <div style={{display: "flex", justifyContent: "space-between", padding: "0 15px"}}>
                    <h1>
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                        NDC News
                    </h1>
                </div>
                <div className="ads_news_list_div">
                    <AdsItem />
                    <AdsItem />
                    <AdsItem />
                    <AdsItem />
                    <AdsItem />
                    <div className="ads_see_more_news_link">
                        See More News
                    </div>
                </div>
            </div>
        )
    }
}

export default AdsNewsCard