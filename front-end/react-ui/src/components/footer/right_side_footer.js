import React from 'react'


function RightSideFooter(){
    return (
        <footer>
            <div className="footer_links">
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="hub_logo" style={{padding: "0 15px", borderTopRightRadius: 0, borderBottomRightRadius: 0, fontWeight: "bolder", color: "white"}}>
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
                    <p style={{backgroundColor: "#424242", padding: 15, borderTopRightRadius: 3, borderBottomRightRadius: 3}}>
                        <span style={{fontSize: 14, color:"rgb(84, 168, 154)", fontWeight: "bolder"}}>The NDC Hub</span>
                            <br />
                            all rights reserved &copy; 2020
                    </p>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <ul>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Help Center</a></li>
                        <li style={{paddingRight: 0}}><a href="/#">More</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default RightSideFooter