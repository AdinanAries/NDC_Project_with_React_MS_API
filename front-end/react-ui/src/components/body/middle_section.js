import React, {Component} from 'react'
import PostNewItemCard from '../page_cards_cards/post_item_card'
import NewsPostCard from '../page_cards_cards/posted_news_item_card'
import MeetingPostCard from '../page_cards_cards/posted_meeting_item_card'
import ProjectPostCard from '../page_cards_cards/posted_project_item_card'
import JobPostCard from '../page_cards_cards/posted_job_item_card'

class MiddleSection extends Component{
    render(){
        return(
            <section className="middle_section">
                <PostNewItemCard />
                <hr style={{margin: "25px 0", border: "none", borderBottom: "1px solid #d3d3d3"}} />
                <h1 style={{backgroundColor: "#e7eeee", padding: "5px 30px", width: "fit-content", margin: "auto", marginTop: "-40px", marginBottom: 10, fontSize: "12px"}}>Post Updates</h1>
                <div className="all_posts_container">
                    <NewsPostCard />
                    <MeetingPostCard />
                    <ProjectPostCard />
                    <JobPostCard />
                </div>
            </section>
        )
    }
}

export default MiddleSection