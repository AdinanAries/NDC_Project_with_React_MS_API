//const { Component } = require("react")

import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        return (
            <div className="main_search_fld">
                <div style={{display: "flex"}}>
                    <input type="text" placeholder="search" value=""/>
                    <div><i class="fa fa-search" aria-hidden="true"></i></div>
                </div>
            </div>
        )
    }
}

export default SearchBar