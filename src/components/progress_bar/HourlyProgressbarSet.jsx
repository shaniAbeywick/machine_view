import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

//var pa04;

function LinearProgressWithLabel1(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel1.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel2(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel2.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel3(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel3.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel4(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel4.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel5(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel5.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel6(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel6.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel7(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel7.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel8(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel8.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel9(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel9.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel10(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel10.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel11(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel11.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel12(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={85}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel12.propTypes = {
  value: PropTypes.number.isRequired,
};


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


export default function LinearWithValueLabel() {

    const classes = useStyles();
    
    const [timetotimeprog1, setTimetotimeprog1] = useState();
    const [timetotimeprog2, setTimetotimeprog2] = useState();
    const [timetotimeprog3, setTimetotimeprog3] = useState();
    const [timetotimeprog4, setTimetotimeprog4] = useState();
    const [timetotimeprog5, setTimetotimeprog5] = useState();
    const [timetotimeprog6, setTimetotimeprog6] = useState();
    const [timetotimeprog7, setTimetotimeprog7] = useState();
    const [timetotimeprog8, setTimetotimeprog8] = useState();
    const [timetotimeprog9, setTimetotimeprog9] = useState();
    const [timetotimeprog10, setTimetotimeprog10] = useState();
    const [timetotimeprog11, setTimetotimeprog11] = useState();
    const [timetotimeprog12, setTimetotimeprog12] = useState();

    
    useEffect(() => {
        
        const client = mqtt.connect('ws://localhost:8083/mqtt')
    
        client.on("connect", () => {
            console.log("connected");
            client.subscribe('+/pa04/pa04stoppagesx/0404');
        });
    
        client.on('message', (topic, message) => {
            
        handleJsonMessage(JSON.parse(message.toString()));
           //console.log(message);
          
        });
    
        return () => {
            if(client)
            client.end() 
        }
        },[])

        const handleJsonMessage = (json) => {

          const today = new Date();
          const hour = today.getHours();
          const minute = today.getMinutes();

          if ((hour === 20) && (minute === 45) ) {
            setTimetotimeprog1(json.hourlyStopperStop)
          }

          if ((hour === 20) && (minute === 46) ) {
            setTimetotimeprog2(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 47) ) {
            setTimetotimeprog3(json.hourlyLabelStop)
          }
          
          if ((hour === 20) && (minute === 48) ) {
            setTimetotimeprog4(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 49) ) {
            setTimetotimeprog5(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 50) ) {
            setTimetotimeprog6(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 51) ) {
            setTimetotimeprog7(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 52) ) {
            setTimetotimeprog8(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute ===53) ) {
            setTimetotimeprog9(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 54) ) {
            setTimetotimeprog10(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 55) ) {
            setTimetotimeprog11(json.hourlyLabelStop)
          }

          if ((hour === 20) && (minute === 56) ) {
            setTimetotimeprog12(json.hourlyLabelStop)
          }
          console.log(json);
          }



  return (
    <div className={classes.root}>

      <LinearProgressWithLabel1 time="7.00-8.00" value={timetotimeprog1} />
      <LinearProgressWithLabel2 time="8.00-9.00" value={timetotimeprog2} />
      <LinearProgressWithLabel3 time="9.00-10.00" value={timetotimeprog3} />
      <LinearProgressWithLabel4 time="10.00-11.00" value={timetotimeprog4} />
      <LinearProgressWithLabel5 time="11.00-12.00" value={timetotimeprog5} />
      <LinearProgressWithLabel6 time="12.00-13.00" value={timetotimeprog6} />
      <LinearProgressWithLabel7 time="13.00-14.00" value={timetotimeprog7} />
      <LinearProgressWithLabel8 time="14.00-15.00" value={timetotimeprog8} />
      <LinearProgressWithLabel9 time="15.00-16.00" value={timetotimeprog9} />
      <LinearProgressWithLabel10 time="16.00-17.00" value={timetotimeprog10} />
      <LinearProgressWithLabel11 time="17.00-18.00" value={timetotimeprog11} />
      <LinearProgressWithLabel12 time="18.00-19.00" value={timetotimeprog12} />

    </div>
  );
}