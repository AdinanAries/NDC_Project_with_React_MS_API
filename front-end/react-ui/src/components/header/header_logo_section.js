import React, {Component} from "react"

class Logo extends Component{
    render(){
       return (
        <div className="hub_logo">
            <div style={{display: "flex"}}>
                <div>T</div>
                <div>H</div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{fontSize: 14, marginBottom: -8}}>E</div>
                    <div style={{fontSize: 14}}>U</div>
                </div>
                <div>B</div>
            </div>
        </div>
       )
    }
        
}

export default Logo