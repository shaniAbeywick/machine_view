import "./controller.css"
import "../sidebar/sidebar.css"
import "../machineInfo/machineInfo.css"
import profile from "../../images/operator/operator.jpg";
import temp from "../../images/temp.png";
import humidity from "../../images/humid.png";
import Switch from '@material-ui/core/Switch';



import Button from '@material-ui/core/Button';


import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';






export default function Controller() {
 
    return (
        <div className="sidebar">
            <div className="machine_controller">
                <div className="cotroller">
                    <div className="machineContainer">
                        <span className="machineTitle">PA08 </span>
          
                        <span><Switch /></span>
                      <div>
                        <span className="machineOperator"><img src={profile} alt="machine operator"  className="profile" /></span> 
                        <span className="operatorName">
                          Azzam
                        </span>
                      </div>
                      
                      
                    
                     
                    </div>
                    <div className="main_div">
                      <span className="Title">Speed</span>
                      <div className="center_div">
                          <h3 id="display">0</h3>
                      </div>
                      
                      <div className="btn">
                      <span className="btnUp"><Button color="primary"  >< ArrowDropDownCircleOutlinedIcon/></Button></span>
                      <span className="btnDown"><Button className="btnRotate" color="primary" >< ArrowDropDownCircleOutlinedIcon/></Button></span>
                      </div>
                      
                      
                      
                      
                    </div>
                </div>  
               
            </div>

           
        </div>    
        
            
                  
               
              
          
                
      
                
            
            
            
       
    )
}
