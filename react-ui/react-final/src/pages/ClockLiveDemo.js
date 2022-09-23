import React, { Component } from 'react'  
import Clock from 'react-live-clock';  

export class ClockLiveDemo extends Component {  
        render() {  
                return (  
                        
                         <div className="container">  
                                        <div class="row" className="hdr">  
                                                <div class="col-sm-12  clk">  
                                                <Clock format={'HH:mm:ss'} ticking={true} />   
                                        </div>  
                                     
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default ClockLiveDemo 