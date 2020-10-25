//const { Component } = require("react")

import React, {Component} from 'react'
import Logo from './header_logo_section'
import SearchBar from './top_search_bar'

class LogoAndSearch extends Component{
    render(){
        return (
            <div className="logo_and_search">
                <Logo />
                <SearchBar />
            </div>
        );
    }
}

export default LogoAndSearch