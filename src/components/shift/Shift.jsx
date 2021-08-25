import  "./shift.css" 
import LinearProgressWithLabel from "./ShiftProgressbar"

export default function Shift() {
    return (
        <div className="shift">
             <h2 className="Shift_title">Shift</h2>
             <LinearProgressWithLabel/>
             <div className="shift_values">
                <div className="target_box">
                    
                       <h3  className="count">355</h3>
                    
                    <div className="value">
                       <h5 className="topic">Target</h5>
                    </div>
                </div>
               
                <div className="actual_box">
                    
                        <h3  className="count">355</h3>
                   
                    <div className="value">
                        <h5 className="topic"> Actual</h5>
                    </div>
                    
                  

                
                   
                 
                </div>
               </div>
             
             

        </div>
    )
}
