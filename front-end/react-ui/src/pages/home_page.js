import React from 'react';
import Header from '../components/header/header'
import Main from '../components/body/main'
import Popupcover from '../components/highest_level_components/popups_page_cover'
import CreatePostCard from '../components/highest_level_components/create_post_inputs_card'

class HomePage extends React.Component{
render(){
        return (
            <div>
                <CreatePostCard />
                <Popupcover />
                <Header />
                <Main />
            </div>
        )

    }
}

export default HomePage