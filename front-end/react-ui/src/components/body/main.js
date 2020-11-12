import React from 'react'
import LeftSection from './left_section'
import MiddleSection from './middle_section'
import RightSection from './right_section'

class Main extends React.Component{
    render(){
        return (
            <main>
                <div class="wrapper">
                <h1 style={{paddingBottom: "20px", paddingTop: "5px", width: "fit-content", margin: "auto", fontSize: "15px", color: "#667676"}}>
                            <span style={{fontWeight: "bolder", color: "#0e3c99", fontSize: "16px"}}>When is the next election? </span>
                            We are here to make sure you get all the important national notifications.
                            <i style={{marginLeft: 15}} className="fa fa-ellipsis-h"></i>
                        </h1>
                    <div class="body_content">
                        <LeftSection />
                        <MiddleSection />
                        <RightSection />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main