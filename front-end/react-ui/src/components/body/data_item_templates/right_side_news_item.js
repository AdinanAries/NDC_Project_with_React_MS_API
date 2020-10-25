import React from 'react'

class AdsItem extends React.Component{
    render(){
        return(
            <div className="ads_each_news">
                <div style={{display: "flex", flexDirection: "column", paddingTop: 4}}>
                    <i className="fa fa-circle ads_news_left_dot" aria-hidden="true"></i>
                </div>
                 <div>
                    <h1>John Mahama Visited Manhyia Pal...</h1>
                    <div style={{display: "flex"}}>
                        <p>2 days</p>
                        <p style={{fontSize: 18, fontWeight: "bolder", margin: "0 5px", marginTop: -5}}>.</p>
                        <p>Approved by Gen. Secretary</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdsItem