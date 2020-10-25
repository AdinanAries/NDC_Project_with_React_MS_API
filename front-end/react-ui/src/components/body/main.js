import React from 'react'
import LeftSection from './left_section'
import MiddleSection from './middle_section'
import RightSection from './right_section'

class Main extends React.Component{
    render(){
        return (
            <main>
                <div class="wrapper">
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