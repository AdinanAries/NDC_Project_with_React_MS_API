import React, {Component} from 'react'

export default class MembersStats extends Component{
    constructor(props){
        super();
    }

    show_submenu(itemId, number){

    }
    hide_submenu(itemId, number){

    }

    render(){
        return(
            <div id="other_stuff_container" className="section_card">
              <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div style={{display: "flex", justifyContent: "space-between", padding: 10}}>
                  <p style={{fontSize: 13, color: "white"}}>
                    Members stats
                    <i style={{marginLeft: 10}} className="fa fa-angle-right" aria-hidden="true"></i>
                  </p>
                  <div onMouseOver={()=> this.show_submenu('member_stats_submenu_', 0)} onMouseOut={() => this.hide_submenu('member_stats_submenu_', 0)} 
                    style={{fontSize: 13, width: 20, color: "white", position: "relative"}}>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    <div id="member_stats_submenu_0" class="small_options_div">
                      <p><i className="fa fa-list" aria-hidden="true"></i>see more</p>
                      <p><i className="fa fa-bookmark" aria-hidden="true"></i>save data</p>
                    </div>
                  </div>
                </div>
                <div id="other_stuff_container_info">
                  <p><span style={{fontWeight: "bolder"}}>New York:</span> 10 chptrs - 10024 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "100%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>London:</span> 7 chptrs - 10000 Mmbrs</p>
                  <div class="chart_bar">
                    <div style={{width: "90%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>California:</span> 5 chptrs - 8099 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "60%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>Washington DC:</span> 5 chptrs - 7957 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "55%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>Berlin:</span> 3 chptrs - 6498 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "40%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>Roma:</span> 3 chptrs - 5453 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "30%"}}></div>
                  </div>
                  <p><span style={{fontWeight: "bolder"}}>Barcelona:</span> 2 chptrs - 4356 Mmbrs</p>
                  <div className="chart_bar">
                    <div style={{width: "25%"}}></div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}