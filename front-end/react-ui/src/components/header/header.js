import LogoAndSearch from './search_and_logo'
import NavbarLinks from './navbar_links'
import ProfilePhoto from './header_profile_picture'

import React, {Component} from 'react'

class Header extends Component{
    render(){
        return (
            <header>
                <div className="wrapper">
                    <div className="header_content">
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <LogoAndSearch />
                        </div>
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <NavbarLinks />
                            <ProfilePhoto />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header