import  "./hourly.css" 
import LinearProgressWithLabel from "./HourlyProgressbar"


export default function Hourly() {
    return (
        <div className="hourly">
            <h2 className="Hourly_title">Hourly</h2>

            <LinearProgressWithLabel/>

            <div className="hourly_values">
                <div className="target_box">
                    
                       <h3 className="count">355</h3>
                    
                    <div className="value">
                       <h5 className="topic">Target</h5>
                    </div>
                </div>
               
                <div className="actual_box">
                
                    <h3 className="count">355</h3>
                
                 <div className="value">
                   <h5 className="topic"> Actual</h5>
                 </div>
                    
                  

                
                   
                 
                </div>
             </div>
            
        </div>
    )
}

