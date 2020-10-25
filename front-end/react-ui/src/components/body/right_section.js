import React from 'react'
import AdsNewsCard from '../page_cards_cards/right_ads_news_card'
import DonationComponent from '../page_cards_cards/make_donations_card'

class RightSection extends React.Component{
    render(){
        return (
            <section class="right_section ">
                <AdsNewsCard />
                <DonationComponent />
            </section>
        )
    }
}

export default RightSection