import React, {Component} from 'react'
import PostNewItemCard from '../page_cards_cards/post_item_card'
import NewsPostCard from '../page_cards_cards/posted_news_item_card'

class MiddleSection extends Component{
    render(){
        return(
            <section className="middle_section">
                <PostNewItemCard />
                <hr style={{margin: "15px 0", border: "none", borderBottom: "1px solid #d3d3d3"}} />
                <div className="all_posts_container">
                    <NewsPostCard />
                </div>
            </section>
        )
    }
}

export default MiddleSection